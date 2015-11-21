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
visualization's width, and h sets the svg's height.
mt, mb, ml, and mr set the top, bottom, left, and
right margins, respectively. (Notice that the SVG's
width will be w + ml + mr, and its height will be
h + mt + mb.) */

function ScatterVis(w, h, mt = 20, mb = 30, ml = 40, mr = 20) {
    // ScatterVis.svg:
    /* Simply the svg used by scatterVis, where the
    visualization is actually displayed. */
    this.svg = d3.select("#scatterVis").select("svg")
		.attr("width", w + ml + mr)
		.attr("height", h + mt + mb)
		.append("g")
		.attr("transform", "translate(" + ml + "," + mt + ")");
    
    // ScatterVis.x():
    /* The x scale (for ideological score) scale
    function. Domain is set to the minimum and
    maximum of the ideological data, and the range
    is set to work with the width of the vis. This
    is a linear scale. */
    this.x = d3.scale.linear()
		.domain(d3.extent(congress.data.members, function(d) {
		    return d.ideology;
		}))
		.range([0,w]);
    
    //ScatterVis.power
    /* A number representing the exponent of the
    power scale used in ScatterVis.y. 1 by default
    (in effect, the scale starts linear). */
    this.power = 1;
    
    // ScatterVis.y():
    /* The y scale (for agreement percent) scale
    function. Domain is the [0;1] interval, and the
    range is set to work with the height of the vis.
    This is a power scale with a starting exponent
    of 1 (so it initially looks like a linear scale;
    this can be changed, though.*/
    this.y = d3.scale.pow().exponent(this.power).
		.domain([0,1])
		.rangeRound([0,h]);
    
    // ScatterVis.partyColor(party):
    /* This is a function that takes a string
    representing a political party (either "D", "I",
    or "R"), and outputs a string for identifying
    the party that is associated with that color. */
    this.partyColor = function(party) {
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
    this.xAxis = d3.svg.axis().scale(this.x).ticks(0).orient("bottom");
    
    // ScatterVis.yAxis():
    /* The function for creating the y axis
    (representing percentage of times the politician
    voted with the selection). */
    this.yAxis = d3.svg.axis().scale(this.y).orient("left");
    
    // ScatterVis.update():
    /* This function tells scatterVis to update the
    visualization to update the values of the
    scatterplot. This function is called when the
    vis is first created and whenever the data needs
    to be updated (this usually is coordinated by
    the event handler defined in main.js). */
    this.update() {
	/* For this function, I followed guidelines
	described by Mike Bostock here:
	http://bl.ocks.org/mbostock/3808218
	*/
	
	// Attach and plot data
	// Data join
	var dots = this.svg.selectAll(".dot")
		.data(Array.from(congress.nonselectedMembers));	// This data is effectively a list of strings consisting of members' names who are not in the selection
		
	// Update existing dots
	// TODO: transitions (move from old to new y)
	dots.attr("cy", function(d) {
		    return this.y(congress.memberAgreementPercent[d]);
		});
		
	// Add new dots
	// TODO: transitions (grow)
	dots.enter().append("circle")
		.attr("class", "dot")
		.attr("r", 4)
		.attr("cx", function(d) {
		    return this.x(congress.data.members[d].ideology);
		})
		.attr("cy", function(d) {
		    return this.y(congress.memberAgreementPercent[d]);
		})
		.style("fill", function(d) {
		    return this.partyColor(congress.data.members[d].party);
		});
	
	// Remove existing dots no longer in selection
	// TODO: transitions (shrink)
	dots.exit().remove();
    }
    
    // Create the axes
    this.svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + h + ")")
	    .call(this.xAxis)
	    .append("text")
	    .attr("class", "label")
	    .attr("x", w)
	    .attr("y", -6)
	    .style("text-anchor", "end")
	    .text("Ideology");
    
    this.svg.append("g")
	    .attr("class", "y axis")
	    .call(this.yAxis)
	    .append("text")
	    .attr("class", "label")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 6)
	    .attr("dy", ".71em")
	    .style("text-anchor", "end")
	    .text("Agreement Rate");
	    
    // Initial dots
    this.update();
}