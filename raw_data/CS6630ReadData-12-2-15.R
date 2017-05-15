if(!require(rjson)){
  install.packages("rjson")
  library(rjson)
}
if(!require(dplyr)){
  install.packages("dplyr")
  library(dplyr)
}
if(!require(magrittr)){
  install.packages("magrittr")
  library(magrittr)
}

vote.dist <- function(data) {
  sapply(unique(member_full), function(x) {
    return(sapply(unique(member_full), function(y) {
      data %>% filter(member_full == x) %>% select(vote_cast) -> senx.vote
      data %>% filter(member_full == y) %>% select(vote_cast) -> seny.vote
      ifelse(senx.vote == seny.vote | senx.vote == "Not Voting" | seny.vote == "Not Voting", 0, 1) %>% sum %>% return
    }))
  }) -> vote_dist
  rownames(vote_dist) <- unique(last_name)
  colnames(vote_dist) <- rownames(vote_dist)
  vote_dist %>% as.dist %>% return
}

# Read in Senate voting record; based on the sheet Vote 296&295
read.csv("SenateVote114.csv") -> senate.vote
attach(senate.vote)
# Constructing unique name, state, and party pairing
senators <- last_name[1:100]
home_state <- state[1:100]
party_member <- party[1:100]

# Determine dissimilarity
cmdscale(vote.dist(senate.vote), k = 1) -> dissimilarity

# Force Democrat dissimilarity to be less than 0, and Republican greater
Republican.sign <- sign(with(data.frame(senators, party_member), mean(dissimilarity[senators[which(party_member == "R")]])))
dissimilarity <- dissimilarity * Republican.sign

# Getting votes on issues
record <- t(sapply(senators, function (sen) {
  return(sapply(unique(vote_number), function (vote) {
    return(vote_cast[which(last_name == sen & vote_number == vote)])
  }))
}))

# Create list data object that will become the JSON string
members.list <- lapply(1:100, function (i) {
  return(list(
    name = senators[i],
    state = home_state[i],
    party = party_member[i],
    ideology = dissimilarity[i],
    votes = record[i,]
    ))
})
names(members.list) <- senators

# Create a list of state delegations
state.unique <- unique(state)
delegations <- lapply(state.unique, function (x) with(senate.vote, unique(last_name[which(state == x)])))
names(delegations) <- state.unique

# Create hash tables that convert between full state names and state abbreviations
fromJSON(file = "states_hash.json") -> state.name.convert
state.name.convert$DC <- "District of Columbia"
state.name.convert.rev <- as.list(names(state.name.convert))
names(state.name.convert.rev) <- as.vector(state.name.convert)

# Create metadata
meta.obj <- list("members" = senators,
                 "votes" = unique(vote_number),
                 "states" = state.unique,
                 "state_abbrev_full" = state.name.convert,
                 "state_full_abbrev" = state.name.convert.rev,
                 "delegations" = delegations)
detach(senate.vote)

# Read in results of votes; based on sheet vote
read.csv("SenateResults114.csv") -> senate.res
attach(senate.res)
levels(result) <- c("Yea", "Yea", "Yea", "Nay", "Yea")
data.obj <- list(members = members.list, winning_vote = result)

# Convert to JSON string
toJSON(data.obj) -> json.string
toJSON(meta.obj) -> json.meta.string

# Save string as json file
json.file <- file("SenateRecord114.json")
write(json.string, json.file)
close(json.file)

json.file <- file("Senate114Metadata.json")
write(json.meta.string, json.file)
close(json.file)
