/**
 * Created by Curtis on 11/12/2015.
 */
/************************************************
 * congress.js
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
    var self = this;

    if (typeof members === "string") {
        members = [members];
    } else if (typeof members != "object") {
        throw new RangeError;
    }

    members.forEach(function(element) {
        if (self.metaData.members.indexOf(element) > -1) {
            self.selectedMembers.add(element);
            self.nonselectedMembers.delete(element);
        } else {
            throw new RangeError;
        }
    });

    // Update congress.memberAgreePercent
    self.getAgreementPercent();
};

/* congress.clearMembers:
A function that clears congress.selectedMembers
of all entries, and adds all members to
congress.nonselectedMembers.
 */
congress.clearMembers = function() {
    var self = this;

    self.selectedMembers.clear();
    self.metaData.members.forEach(function(element) {
        congress.nonselectedMembers.add(element);
    });

    // Update congress.memberAgreePercent
    self.getAgreementPercent();
};

/* congress.memberAgreementPercent:
An object of key-value pairs that contains the
percentage of times that members who are not in
selectedMembers voted the same as those who are
in selectedMembers. This is manipulated by
getAgreementPercent. Do not modify this directly.
 */
congress.memberAgreementPercent = {};

/* congress.stateAgreementPercent:
An object of key-value pairs that contains the
percentage of times for each state a member of that
state's delegation not in the selection voted with
members in the selection. This is manipulated by
getAgreementPercent. Do not modify this directly.
*/
congress.stateAgreementPercent = {};

/* congress.getAgreementPercent:
This function calculates how frequently members
not in the selection voted with those who are in
the selection. It manipulates the
memberAgreementPercent object, where these values
are stored.
 */
congress.getAgreementPercent = function() {
    var self = this;

    if (self.selectedMembers.size == 0) {
        // No members have been selected; now, we interpret memberAgreementPercent as the percentage of times a member voted with the winning side
        self.metaData["members"].forEach(function(val) {
            // Get the number of times the member voted in agreement with a member in the selection
            var count = 0;

            self.metaData.votes.forEach(function(val2, index) {
                var voteInd = parseInt(val2, 10) - 1;
                if (self.data.members[val].votes[index] == self.data.winning_vote[voteInd]) {
                    count++;
                }
            });

            // Assign to memberAgreementPercent
            self.memberAgreementPercent[val] = count / self.metaData.votes.length;
	    });

        // Do similarly for stateAgreementPercent what was done for memberAgreementPercent
        self.metaData["states"].forEach(function(val) {
            // Get the number of times a member of the state's delegation voted with the winning side
            var count = 0;
            var mem1 = self.selectedMembers.values().next().value;

            self.metaData.votes.forEach(function(val2, index) {
                // Check to see if any member from the delegation agreed on each vote
                var voteInd = parseInt(val2, 10) - 1;
                var delAgreed = false;
                for (dmi = 0; dmi < self.metaData.delegations[val].length; dmi++) {
                    var delMem = self.metaData.delegations[val][dmi];
                    if (self.data.members[delMem].votes[index] == self.data.winning_vote[voteInd]) {

                        delAgreed = true;
                        break;
                    }
                }

                if (delAgreed) {
                    count++;
                }
            });

            // Assign to stateAgreementPercent
            self.stateAgreementPercent[val] = count / self.metaData.votes.length;
        });

    } else {
        // First, get the indices of times everyone in the selection voted in agreement
        var commonVotes = [];

        for (i = 0; i < self.metaData.votes.length; i++) {
            var agreement = true;
            var selectIter = self.selectedMembers.values();
            var mem1 = selectIter.next().value;

            var sn = selectIter.next();
            // Check for agreement
            while (!(sn.done)) {
                // Notice that when a member doesn't vote, that vote is not included
                agreement = agreement & (self.data.members[mem1].votes[i] == self.data.members[sn.value].votes[i]) & (self.data.members[sn.value].votes[i] != "Not Voting");
                sn = selectIter.next();
            }

            if (agreement) {
                commonVotes.push(i);
            }
        }

        // Next, for each member, get the proportion of times they voted the same as members in the selection
        self.metaData["members"].forEach(function(val) {
            // Get the number of times the member voted in agreement with a member in the selection
            var count = 0;
            var mem1 = self.selectedMembers.values().next().value;

            commonVotes.forEach(function(val2) {
                if (self.data.members[val].votes[val2] == self.data.members[mem1].votes[val2]) {
                    count++;
                }
            });

            // Assign to memberAgreementPercent
            if (commonVotes.length > 0) {
                self.memberAgreementPercent[val] = count / commonVotes.length;
            } else {	// A "default" value, which happens for basically the empty set
                self.memberAgreementPercent[val] = 0;
            }
        });

        // Finally, for each state delegation, get the proportion of times any member of the state's delegation voted the same as members in the selection
        self.metaData["states"].forEach(function(val) {
            // Get the number of times a member of the state's delegation voted with the selection
            var count = 0;
            var mem1 = self.selectedMembers.values().next().value;

            commonVotes.forEach(function(val2) {
                // Check to see if any member from the delegation agreed on each vote
                var delAgreed = false;
                for (dmi = 0; dmi < self.metaData.delegations[val].length; dmi++) {
                    var delMem = self.metaData.delegations[val][dmi];
                    if ((self.nonselectedMembers.has(delMem)) &     // Exclude selected members
                        (self.data.members[delMem].votes[val2] == self.data.members[mem1].votes[val2])) {

                        delAgreed = true;
                        break;
                    }
                }

                if (delAgreed) {
                    count++;
                }
            });

            // Assign to memberAgreementPercent
            if (commonVotes.length > 0) {
                self.stateAgreementPercent[val] = count / commonVotes.length;
            } else {	// A "default" value, which happens for basically the empty set
                self.stateAgreementPercent[val] = 0;
            }
        });
    }
};
