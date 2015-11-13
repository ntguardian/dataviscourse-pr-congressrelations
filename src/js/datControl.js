/**
 * Created by Curtis on 11/12/2015.
 */
/************************************************
 * datControl.js
 ************************************************
 *
 * This script contains the definition and
 * methods of the object congress. This object:
 *
 *      * Holds the senators' data
 *      * Holds the vector containing the current
 *          selection
 *      * Contains methods for which to obtain
 *          the data that is plotted (namely,
 *          ideological score and percentage of
 *          times they voted with selection
 *
 * The vis elements send queries and get
 * information from this object.
  */

// congress creation
congress = new Object();

/* congress.selectedMembers:
A set containing the senators that are in the
current selection. Should be manipulated with the
functions addMember or clearMembers, to prevent
errors.
 */
congress.selectedMembers = new Set();

/* congress.data:
An object containing data about a Congress and
votes. Will be loaded in from a json file.
 */
congress.data = {};

/* congress.metaData:
An object containing congressional vote metadata
(senators, votes, etc.). Loaded in from a json
file.
 */
congress.metaData = {};

/* congress.nonselectedData:
Like congress.selectedData, but for those members
who are not in the selection. Manipulating this
directly is not advised.
 */
congress.nonselectedMembers = new Set();

/* congress.addMember:
A method that adds members to selectedMembers and
removes the corresponding members from
nonselectedMembers. It is preferable to use this
method in order to ensure that valid changes to
selectedMembers are made (such as they are, in
fact, a member, or are not already in the
selection) while ensuring that they are removed
from nonselectedMembers.
 */
congress.addMember = function(members) {
    if (typeof members === "string") {
        members = [members];
    } else if (members != "object") {
        throw new RangeError;
    }

    members.forEach(function(element, i, arr) {
        if (congress.metaData.members.has(element)) {
            congress.selectedMembers.add(element);
            congress.nonselectedMembers.delete(element);
        } else {
            throw new RangeError;
        }
    })
};

/* congress.clearMembers:
A function that clears congress.selectedMembers
of all entries, and adds all members to
congress.nonselectedMembers.
 */
congress.clearMembers = function() {
    congress.selectedMembers.forEach(congress.selectedMembers.delete);
    congress.metaData.members.forEach(congress.nonselectedMembers.add);
};

/* congress.memberAgreementPercent:
An object of key-value pairs that contains the
percentage of times that members who are not in
selectedMembers voted the same as those who are
in selectedMembers. This is manipulated by
getAgreementPercent. Do not modify this directly.
 */
congress.memberAgreementPercent = {};

/* congress.getAgreementPercent:
This function calculates how frequently members
not in the selection voted with those who are in
the selection. It manipulates the
memberAgreementPercent object, where these values
are stored.
 */
congress.getAgreementPercent = function() {

    if (congress.selectedMembers.size == 0) {
        // No members have been selected; now, we interpret memberAgreementPercent as the percentage of times a member voted with the winning side.
    } else {
        // First, sum the number of times everyone in the selection voted in agreement
    }
};
