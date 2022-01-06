// includes / "require"
const Discord = require('discord.js');
const ball    = require('./Commands/8Ball');
const help    = require('./Commands/help');
const gacha   = require('./Commands/gacha');
const Profile = require('./data/profile');

// const variables
const policeImg    = "https://i.imgur.com/o1GGejt.png";
const selfPortrait = "https://i.imgur.com/aMiCkAM.png";

// inline command functions
const selfie = function(){ return selfPortrait; }
const police = function(){ return policeImg; }
const shoot  = function(){ return "pew pew"; }

// commands
const commands = {
  "n; nipnuk": selfie,
  "n; help"  : help.sendHelp,
  "n; shoot" : shoot,
  "?"        : ball.answer, // magic 8 ball for questions
  "n; police": police,
  "n; popo"  : police,      // allow shorthand for police
  "n; p"     : gacha.result,
  "n; Sdemons": help.demonListS, // allow demon lists and shorthands
  "n; sd"     : help.demonListS,
  "n; Ademons": help.demonListA,
  "n; ad"     : help.demonListA,
  "n; Bdemons": help.demonListB,
  "n; bd"     : help.demonListB,
  "n; Cdemons": help.demonListC,
  "n; cd"     : help.demonListC,
  "n; Udemons": help.demonListU,
  "n; ud"     : help.demonListU,
}

// msg should be a string starting with "n;"
// in case of user asking a question, index will pass msg == "?" 
var parse = function(msg){
  if(commands[msg]){
    return commands[msg]();
  } else {
    return "Invalid Command";
  }
}

// profile commands (allow shorthand)
const profiles = {
  "n; set favorite": Profile.favorite,
  "n; sf"          : Profile.favorite,
  "n; set color"   : Profile.color,
  "n; sc"          : Profile.color,
  "n; caps"        : Profile.caps,
  "n; captures"    : Profile.caps, 
}

var profParse = function(msg, profileObj, opt){
  if(profiles[msg]){
    return profiles[msg](profileObj, opt);
  } else {
    return "Invalid Command";
  }
}

module.exports.parse = parse;
module.exports.profileParse = profParse;