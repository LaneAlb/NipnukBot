var responses = [ 
    "It is certain",
    "AMONG US",
    "Yes, definitely",
    "You may rely on it",
    "The void unfortunately says yes",
    "Most likely",
    "Yes",
    "Ask again later",
    "Don't Talk If You Don't Know",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Doesn't look so good",
    "Very doubtful",
    "Yes, because you are cute, loved, and cared for",
    "No, because you're probably too loud... Like Bear",
    "Aly told me to tell you no",
    "YEESSSSSSSSS! -a wild jiku in the distance",
    "Yeah -Manaro",
    "NOOOOOOOOOOO! -a wild jiku in the distance",
    "Stop asking me Twitch chat questions",
]

var answer = function(){ 
  return responses[Math.floor(Math.random() * (responses.length))];
}

const queries = function(customMSG){
  // do stuff on custom message
} 

module.exports.answer  = answer;
module.exports.queries = queries;
