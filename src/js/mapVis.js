/**
 * Created by Curtis on 11/24/2015.
 */
/************************************************
 * mapVis.js
 ************************************************
 *
 * This script creates and controls the map
 * visualization. The map visualizes agreement with
 * congressional delegations across states. Color
 * encodes political party, and saturation encodes
 * agreement (high saturation indicates high
 * agreement, while low saturation indicates low
 * agreement). Notice that for a mixed delegation
 * (i.e. a Republican and a Democrat from the same
 * state) the hue will depend on how greatly the
 * members from the two parties agree with the
 * selection (in other words, there will be some
 * intermediate hue between blue and red). Clicking
 * a state changes the selection and adds both
 * members from the state's delegation to the
 * selection, while clearing what the selection
 * currently contains.
 *
 * main.js calls the function that creates and runs
 * the map, and also contains the dispatch object
 * used here. The data is loaded in main.js, and
 * congress.js contains its definitions. Notice
 * that the congress object must be active prior to
 * calling this function.
 *
  */

//mapVis():
/* In practice, mapVis is represented as an
object. This function creates an instance of the
mapVis object (vis "new"), and the function
itself defines the schema of the object. w sets the
visualization's width, and h sets the vis's height.
mt, mb, ml, and mr set the top, bottom, left, and
right margins, respectively. (Notice that the SVG's
width will be w + ml + mr, and its height will be
h + mt + mb.) */

function MapVis(w, h, mt, mb, ml, mr) {
    var self = this;

    // ScatterVis.svg:
    /* Simply the svg used by scatterVis, where the
    visualization is actually displayed. */
    self.svg = d3.select("#mapVis").select("svg")
		.attr("width", w + ml + mr)
		.attr("height", h + mt + mb)
		.append("g")
		.attr("transform", "translate(" + ml + "," + mt + ")");

    // ScatterVis.projection:
    /* Controls the projection used by the map
    visualization (Albers USA projection). */
    self.projection = d3.geo.albersUsa()
                .translate([w / 2, h / 2])
                .scale([700]);

    // ScatterVis.path
    /* This is an actual realization of the path
    used to draw the map, which depends on the
    projection specified in ScatterVis.projection. */
    self.path = d3.geo.path()
		.projection(self.projection);

    // MapVis.stateColor(state):
    /* This is a function that takes a string
    representing a state and outputs a string
    representing a hexadecimal code for the color
    for a state. This is some combination of hue and
    brightness depending on the state's
    delegation's party affiliation and agreement
    with the selection. */
    self.stateColor = function(state) {
	    /* This method is somewhat complex and
	    * difficult to understand. Basically,
	    * brightness indicates how frequently any
	    * member of the state's delegation agrees
	    * with the selection, and hue indicates the
	    * political leaning of the delegation.
	    * Ignoring third parties and independents
	    * for the moment, if the members of the
	    * state's delegation are from different
	    * parties, the hue of the color will be some
	    * intermediate value between red and blue,
	    * depending on whether the Democrat or the
	    * Republican are more inclined to agree with
	    * the selection. This is determined
	    * subtractively, basically with CMYK logic,
	    * which is then converted to an RGB color
	    * and finally a hex string. */

        // Delegation agreement determines lightness
        var sat = congress.stateAgreementPercent[state];
        // Initialize CMYK object that contains CM
        var cmyk = {C : 0, M : 0, Y : 0, K : 0};
        var rgbVal = {R : 0, G : 0, B : 0};
        // Will contain how many Republicans, Democrats, and Independents are in the delegation
        var rdi = {"R" : 0, "D" : 0, "I" : 0};

        // Get delegation's agreement with selection
        congress.metaData.delegations[state].forEach(function(member) {
            rdi[congress.data.members[member].party] += congress.memberAgreementPercent[member];
        });

        // Translate to "share of agreement", which will be used for determining hue
        var agreeRatio = {"R" : (rdi.R / (rdi.R + rdi.D + rdi.I)),
                          "D" : (rdi.D / (rdi.R + rdi.D + rdi.I)),
                          "I" : (rdi.I / (rdi.R + rdi.D + rdi.I))};

        // Finally, get the CMYK hue  based on agreeRatio
        cmyk.C = sat * agreeRatio.D;
        cmyk.M = sat * (agreeRatio.D + agreeRatio.R);
        cmyk.Y = sat * (agreeRatio.R + agreeRatio.I);
        cmyk.K = sat * 0;

        // Convert to RGB
        rgbVal.R = 255 * (1 - cmyk.C) * (1 - cmyk.K);
        rgbVal.G = 255 * (1 - cmyk.M) * (1 - cmyk.K);
        rgbVal.B = 255 * (1 - cmyk.Y) * (1 - cmyk.K);

        var color = d3.rgb(rgbVal.R, rgbVal.G, rgbVal.B);
        return color.toString();
    }

    //Load in GeoJSON data
    d3.json("data/us-states.json", function (json) {
        d3.json('data/states_hash.json', function (statesHash) {        // This file found here: https://gist.github.com/mshafrir/2646763
            /* -- Jignesh's code (Keeping for reference, but I'm not doing things this way -- */
            //Merge the senate data and GeoJSON
            //Loop through once for each senate data value
            /*for (var i = 0; i < data.length; i++) {
             //Grab state name
             var dataState = data[i].state;
             //Grab data value, and convert from string to float
             var dataValue = parseFloat(data[i].ideology);
             //Find the corresponding state inside the GeoJSON
             for (var j = 0; j < json.features.length; j++) {
             var jsonState = json.features[j].properties.name;
             if (dataState == jsonState) {
             //Copy the data value into the JSON
             json.features[j].properties.value = dataValue;
             break;
             }
             }
             }*/
            //Bind data and create one path per GeoJSON feature
            self.svg.selectAll("path")
                .data(json.features)
                .enter()
                .append("path")
                .attr("d", self.path)
                .style("fill", function (d) {
                    return self.stateColor();
                });
        });
    });
}
