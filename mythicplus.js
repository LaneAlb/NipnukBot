// includes / "require"
let week = 4;
var lastUpdate = new Date('January 11, 2022 00:00:00').getTime();
const msPerWeek = 7*24*60*60*1000;
const AffixRotations = {
  1:  ["Fortified", "Bursting", "Storming"],
  2:  ["Tyrannical", "Raging", 	"Volcanic"],
  3:  ["Fortified", "Inspiring", "Grievous"],
  4:  ["Tyrannical", "Spiteful",	"Necrotic"],
  5:  ["Fortified", "Bolstering",	"Quaking"],
  6:  ["Tyrannical", "Sanguine",	"Storming"],
  7:  ["Fortified", "Raging",	"Explosive"],
  8:  ["Tyrannical", "Bursting",	"Volcanic"],
  9:  ["Fortified", "Spiteful",	"Grievous"],
  10: ["Tyrannical","Inspiring",	"Quaking"],
  11: ["Fortified", "Sanguine",	"Necrotic"],
  12: ["Tyrannical", "Bolstering", "Explosive"],
};

var getAffixes = function(){
  var currTime = new Date().getTime();
  if( currTime - lastUpdate >= msPerWeek) {
    (week === 12) ? 0 : week += 1;
    lastUpdate = currTime;
  }
  console.log(week)
  return AffixRotations[week];
}

var getNextAffixes = function(){
  return AffixRotations[week + 1];
}

module.exports.getAffixes = getAffixes();
module.exports.getNextAffixes = getNextAffixes();
