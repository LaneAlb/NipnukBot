// requires
const Discord= require('discord.js');
const Chance = require('chance');
const Imgs   = require('../data/imageManifesto');

// Variables
var ch   = new Chance();
/* Using Local Files in Folders
const Fs     = require('fs');
variable = Fs.readdirSync('PATH');
*/
// Array of Images within each "Tier" Folder
// Folders must follow format of "Name Tier"
const Unab  = Imgs.tiers.get("Unobtainable Tier");
const STier = Imgs.tiers.get("S Tier");
const ATier = Imgs.tiers.get("A Tier");
const BTier = Imgs.tiers.get("B Tier");
const CTier = Imgs.tiers.get("C Tier");
const Cursed= Imgs.tiers.get("Cursed Tier");

// grab random name from Tier list in the manifesto
// return image name + tier it is from in a string
var pull = function() {
  var result = ch.integer({min: 1, max: 1000});
  
  if(result <= 10){        // ~1%
    return Unab[Math.floor(Math.random()  * (Unab.length))]  + '/S+';
  }
  else if(result <= 60){   // ~5%
    return STier[Math.floor(Math.random() * (STier.length))] + '/S';
  }
  else if(result <= 150){  // ~10%
    return ATier[Math.floor(Math.random() * (ATier.length))] + '/A';
  }
  else if(result <= 375){  // ~22.5%
    return BTier[Math.floor(Math.random() * (BTier.length))] + '/B';
  }
  else if(result <= 900){  // ~52.5%
    return CTier[Math.floor(Math.random() * (CTier.length))] + '/C';
  } 
  else if(result <= 1000){ // ~10%
    return Cursed[Math.floor(Math.random() * (Cursed.length))] + '/Cursed'
  }
}

var result = function(){
  const gachaEmbed = new Discord.MessageEmbed()
  .setColor('#9729cf')
  .setTimestamp()
  .setFooter("Nipnuk's Void Gacha",'https://i.imgur.com/aMiCkAM.png');

  var gachaPull = pull();
  var imgName   = gachaPull.substr(0, gachaPull.indexOf('/'));
  var tier      = gachaPull.substr(gachaPull.indexOf('/') + 1) + " Tier";
  // Set the image from map in imageManifesto
  gachaEmbed.setImage(Imgs.hunter.get(imgName));
  gachaEmbed.setTitle(imgName.substr(imgName));
  gachaEmbed.setDescription(tier + '\n *React with a :japanese_ogre:to Capture*');
  return gachaEmbed;
}

module.exports.result = result;