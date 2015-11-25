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

    // MapVis.partyColor(party):
    /* This is a function that takes a string
    representing a political party (either "D", "I",
    or "R"), and outputs a string for identifying
    the party that is associated with that color. */
    self.partyColor = function(party) {
	if (party == "R") {
	    return "crimson";
	} else if (party == "D") {
	    return "dodgerblue";
	} else {		// Think independents
	    return "gold";
	}
    }
    
    //Load in GeoJSON data
    d3.json("data/us-states.json", function (json) {
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
		    console.log(d);
		    
		    return "#ccc";
        });
    });
}
