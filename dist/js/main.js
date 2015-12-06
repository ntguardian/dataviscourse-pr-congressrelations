/**
 * Created by Curtis on 11/19/2015.
 */
/************************************************
 * main.js
 ************************************************
 *
 * This script represents an overall controller,
 * which calls the functions included in other
 * scripts. This script:
 *
 *      * Loads the data in the json files
 *	* Runs the visualizations once the data
 *	  is loaded
 *	* Creates a dispatcher for event handling
  */

// dispatch creation
dispatch = d3.dispatch("selectionChanged", "membersHovered", "membersUnhovered");

/*
dispatch.selectionChanged():
Reloads all views when the member selection has
changed.
*/
dispatch.on("selectionChanged", function() {
    scatterVis.update();
    mapVis.update();
    // Update the p containing the list of members
    d3.select("#memberList").text(selectionStringGen());
});

/*
dispatch.membersHovered(members):
Applies the class "hovered" to dots in the
scatterplot and states in the map that have members
being hovered over by the mouse. Takes a set called
"members", which contains the last names of every
member being hovered.
*/
dispatch.on("membersHovered", function(members) {
    members = new Set(members);
    
    // Highlight dots
    scatterVis.svg.selectAll(".dot")
	/*.sort(function(d) {
	    if (members.has(d)) {
		return 1;
	    }
	    return 0;
	})*/
	.classed("hovered", function(d) {
	    if (members.has(d)) {
		return true;
	    } else {
		return false;
	    }
	});
    
    // Highlight states
    mapVis.statePaths
	.sort(function(d) {
	    var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
	    var delegation = congress.metaData.delegations[stateAbbrev];
	    try {
		for (i = 0; i < delegation.length; i++) {
			if (members.has(delegation[i]) |
			    congress.selectedMembers.has(delegation[i])) {
			    return 1;
			}
		}
	    } catch (TypeError) {
		// Do nothing
	    }
	    return 0;
	})
	.classed("hovered", function(d) {
	    var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
	    var delegation = congress.metaData.delegations[stateAbbrev];
	    //console.log(delegation, state);
	    
	    try {
		for (i = 0; i < delegation.length; i++) {
		    if (members.has(delegation[i])) {
			return true;
		    }
		}
	    } catch (TypeError) {
		    // Do nothing
	    }
	    return false;
	});
});

/*
dispatch.membersUnhovered():
Removes the class "hovered" from every state and dot
in the scatterplot.
*/
dispatch.on("membersUnhovered", function() {
    scatterVis.svg.selectAll(".dot").classed({"hovered": false, "dot": true});
    mapVis.statePaths.classed("hovered", false);
});

// Data loading
// Code inspired by: https://groups.google.com/forum/#!msg/d3-js/3Y9VHkOOdCM/YnmOPopWUxQJ

// First load and assign metadata
d3.json("data/Senate114Metadata.json", function(md) {
        congress.metaData = md;

        // Now load and assign record data
        d3.json("data/SenateRecord114.json", function(cd) {
        congress.data = cd;
        congress.clearMembers();
	    congress.getAgreementPercent();

            // Code from: https://jqueryui.com/autocomplete/#maxheight
            $(function() {
                $( "#memberInput" ).autocomplete({
                    source: congress.metaData.members
                });
            });

	    // Call visualizations
	    scatterVis = new ScatterVis(400,300,30,40,50,30,.4);
	    mapVis = new MapVis(600,375,30,30,30,30,900);
        
	    // A function for generating a string with the members in the selection
	    selectionStringGen = function() {
		var selString = "";
		if (congress.selectedMembers.size < 1) {
		    return "No one selected (charts shows victory rate)";
		}
		congress.selectedMembers.forEach(function(member) {
		    selString = selString + 
				member + " (" +
				congress.data.members[member].party + 
				"-" + congress.data.members[member].state +
				"); "
		});
		
		return selString;
            }
    });
});
