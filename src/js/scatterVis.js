/**
 * Created by Curtis on 11/20/2015.
 */
/************************************************
 * scatterVis.js
 ************************************************
 *
 * This script creates and controls the scatterplot
 * from the dataset. In the scatterplot, congress
 * members in the selection are plotted as points,
 * with color indicating political party, x position
 * their ideological leaning (which is precalculated
 * using dimensionality reduction, like the NOMINATE
 * method), and y position the proportion of times
 * the individual voted with the members in the
 * selection. Clicking members changes the
 * selection.
 *
 * main.js calls the function that creates and runs
 * the scatterplot, and also contains the dispatch
 * object used here. The data is loaded in main.js,
 * and congress.js contains its definitions. Notice
 * that the congress object must be active prior to
 * calling this function.
 *
 * A lot of code is based off (or straight-up
 * copied) Mike Bostock's scatterplot tutorial,
 * found here:
 * http://bl.ocks.org/mbostock/3887118
 *
  */

// ScatterVis():
/* In practice, scatterVis is represented as an
object. This function creates an instance of the
scatterVis object (vis "new"), and the function
itself defines the schema of the object. w sets the
visualization's width, and h sets the vis's height.
mt, mb, ml, and mr set the top, bottom, left, and
right margins, respectively. (Notice that the SVG's
width will be w + ml + mr, and its height will be
h + mt + mb.) dotScale determines point size. */

function ScatterVis(w, h, mt, mb, ml, mr, dotScale) {
    var self = this;

    // ScatterVis.svg:
    /* Simply the svg used by scatterVis, where the
    visualization is actually displayed. */
    self.svg = d3.select("#scatterVis")
		.classed("svg-container", true)
		.select("svg")
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr("viewBox", "0 0 " + (w + ml + mr) + " " + (h + mt + mb))
		//.attr("width", w + ml + mr)
		//.attr("height", h + mt + mb)
		.classed("svg-content-responsive", true)
		.append("g")
		.attr("transform", "translate(" + ml + "," + mt + ")");

    // ScatterVis.x():
    /* The x scale (for ideological score) scale
    function. Domain is set to the minimum and
    maximum of the ideological data, and the range
    is set to work with the width of the vis. This
    is a linear scale. */
    self.x = d3.scale.linear()
		.domain([d3.min(congress.metaData.members, function(d) {
		    return congress.data.members[d].ideology;
		}) -.5,
            d3.max(congress.metaData.members, function(d) {
            return congress.data.members[d].ideology;
        }) +.5])
		.range([0,w ]);

    //ScatterVis.power
    /* A number representing the exponent of the
    power scale used in ScatterVis.y. 1 by default
    (in effect, the scale starts linear). */
    self.power = 1;

    // ScatterVis.y():
    /* The y scale (for agreement percent) scale
    function. Domain is the [0;1] interval, and the
    range is set to work with the height of the vis.
    This is a power scale with a starting exponent
    of 1 (so it initially looks like a linear scale;
    this can be changed, though.*/
    self.y = d3.scale.pow().exponent(self.power)
		.domain([0 -.05,1 +.05])
		.rangeRound([h ,0]);

    // ScatterVis.partyColor(party):
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

    // ScatterVis.xAxis():
    /* The function for creating the x axis
    (representing ideological leaning). Notice that
    there are NO tickmarks (the reasoning being that
    the actual value for political ideology may not
    actually be meaningful; I would rather show the
    ranking and some notion of distance, rather than
    focus on the actual values). */
    self.xAxis = d3.svg.axis().scale(self.x).ticks(0).orient("bottom");

    // ScatterVis.yAxis():
    /* The function for creating the y axis
    (representing percentage of times the politician
    voted with the selection). */
    self.yAxis = d3.svg.axis().scale(self.y).orient("left");

    // ScatterVis.tooltip():
    /* The tooltip is a div element that is added to
     the document when the object is created. It is
     manipulated by the mouseover events of the dots
     created and added to the scatterplot. */
    self.tooltip = d3.select("body").append("div")
        //.attr('class', "tooltip")
        .attr('id', "scatterVisTooltip")
        .attr("class", "hidden")
        .attr("transform", "translate(" + ml + "," + mt + ")")
        .append("p")
        .attr("id", "value");

    // ScatterVis.update():
    /* This function tells scatterVis to update the
    visualization to update the values of the
    scatterplot. This function is called when the
    vis is first created and whenever the data needs
    to be updated (this usually is coordinated by
    the event handler defined in main.js). */
    self.update = function() {
        /* For this function, I followed guidelines
        described by Mike Bostock here:
        http://bl.ocks.org/mbostock/3808218
        */
        // Hide tooltip
        d3.select("#scatterVisTooltip").classed("hidden", true);

        // Attach and plot data
        // Data join
        var dots = self.svg.selectAll(".dot")
            .data(congress.metaData.members.sort());	// This data is effectively a list of strings consisting of members' names who are not in the selection

        // Add new dots
        dots.enter().append("circle")
            .attr("class", "dot")
            .style("fill", function(d) {
                return self.partyColor(congress.data.members[d].party);
            })
            .attr("cx", function(d) {
                return self.x(congress.data.members[d].ideology);
            })
            .attr("cy", function(d) {
                return self.y(congress.memberAgreementPercent[d]);
            })
            .attr("r", 8 * dotScale)
            .text(function(d) {
                return d;
            })
            .on("mouseover", function(d) {
                var coordinates = [d3.event.pageX, d3.event.pageY];
                //console.log(coordinates)
                // Return properly formatted value
                var formattedText = d +
		    " (" + congress.data.members[d].party + "-" + congress.data.members[d].state + "): " +
		    d3.round(100 * congress.memberAgreementPercent[d]) + "%";
		    
		/* It is possible for two members to have identical voting
		patterns and therefore for a point to cover others; detect
		other memebers at this location, and add their information
		to the tooltip. */
		// First, find and list other members at this location
		var otherMembersHere = [];
		congress.metaData.members.forEach(function(mem) {
		    if (mem != d &
			!congress.selectedMembers.has(mem) &
			congress.data.members[mem].ideology == congress.data.members[d].ideology &
			congress.memberAgreementPercent[mem] == congress.memberAgreementPercent[d]) {
			
			otherMembersHere.push(mem);
		    }
		});
		
		// If there were other members at this location, add their information to the tooltip string
		otherMembersHere.forEach(function(mem) {
		    formattedText = formattedText + "<br>";
		    formattedText = formattedText + mem +
			" (" + congress.data.members[mem].party + "-" + congress.data.members[mem].state + "): " +
			d3.round(100 * congress.memberAgreementPercent[mem]) + "%";
		});

                if (!congress.selectedMembers.has(d)) {
                    // Zoom and lighten
                    d3.select(this)
                        .transition().duration(400)
                        .attr("r", 16 * dotScale)
                        .attr("opacity",.7);

                    // Move tooltip (code from: http://chimera.labs.oreilly.com/books/1230000000345/ch10.html#_html_div_tooltips)
                    // Update the tooltip position and value
                    d3.select("#scatterVisTooltip")
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + "px")
                        .select("#value")
                        .html(formattedText);

                    // Show the tooltip
                    d3.select("#scatterVisTooltip").classed("hidden", false);
                }
                
                // Highlight other elements in the visualization
                // The event handler handles this; call the event membersHovered
                otherMembersHere.push(d);
                dispatch.membersHovered(otherMembersHere);
            }).on("mouseout", function(d) {
                if (!congress.selectedMembers.has(d)) {
                    // Return to defaults
                    d3.select(this)
                        .transition().duration(400)
                        .attr("r", 8 * dotScale)
                        .attr("opacity",1);

                    // Hide the tooltip
                    d3.select("#scatterVisTooltip").classed("hidden", true);
                }
                dispatch.membersUnhovered();
            })
            .on("click", function(d) {
                if (!document.getElementById("keepSelection").checked) {
		    congress.clearMembers();
                }
                congress.addMember([d]);
                dispatch.selectionChanged();
            });

        // Update existing dots
        dots.transition().duration(1000)
            .attr("cx", function(d) {
                return self.x(congress.data.members[d].ideology);
            })
            .attr("cy", function(d) {
                return self.y(congress.memberAgreementPercent[d]);
            })
            .attr("r", function(d) {
                if (congress.selectedMembers.has(d)) {
                    return 0;
                } else {
                    return 8 * dotScale;
                }
            })
            .attr('opacity', 1);

        // Remove existing dots no longer in selection
        dots.exit().transition().duration(1000)
            .attr("r", 0).remove();
    }

    // Create the axes
    self.svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + h + ")")
	    .call(self.xAxis)
	    .append("text")
	    .attr("class", "label")
	    .attr("x", w)
	    .attr("y", -6)
	    .style("text-anchor", "end")
	    .text("Ideology");

    self.svg.append("g")
	    .attr("class", "y axis")
	    .call(self.yAxis)
	    .append("text")
	    .attr("class", "label")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 6)
	    .attr("dy", ".71em")
	    .style("text-anchor", "end")
	    .text("Agreement Rate");

    // Initial dots
    self.update();
}
