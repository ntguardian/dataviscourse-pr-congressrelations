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
/*
selectionChanged:
Reloads all views when the member selection has
changed.
*/
dispatch = d3.dispatch("selectionChanged");
dispatch.on("selectionChanged", function() {
    scatterVis.update();
    mapVis.update();
    // Update the p containing the list of members
    d3.select("#memberList").text(selectionStringGen());
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
		    return "No one selected (chart shows victory rate)";
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
