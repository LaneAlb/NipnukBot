var responses = [ 
    "It is certain",
    "AMONG US",
    "Yes, definitely",
    "You may rely on it",
    "The void unfortunately says yes",
    "Most likely",
    "SUS",
    "Yes",
    "Ask again later",
    "Don't Talk If You Don't Know",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Doesn't look so good",
    "Very doubtful",
    "No Kizzy?",
]

var answer = function(){ 
  return responses[Math.floor(Math.random() * (responses.length - 1))];
}

module.exports.answer = answer;