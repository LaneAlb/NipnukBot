const Database = require("@replit/database")
const Discord  = require('discord.js');
const Colors   = require('./colors');
const manifesto= require('./imageManifesto');

const db       = new Database();
// just have the class only be used for embed structures
class Profile {
  constructor(name){
    this.user = name;
    this.footer = 'Loyal Follower of Nipnuk';
    this.captures = new Map();
    this.color = '#cf2929';
    this.totalCaps = 0;
    this.mostDemon = 'No Demons Captured Yet';
    this.mostCaps = 0;
    this.favorite = '';
    this.favTier = '';
    this.favImg  = '';
  }
}

  const output = function(profObj){
    if(profObj === undefined || profObj === ''){
      profObj.mostDemon = 'No Demons Captured Yet';
    }
    const embed = new Discord.MessageEmbed()
    .setColor(profObj.color)
    .setFooter(profObj.footer);
    // Set Favorite Demon in Description
    if(profObj.favorite === ''){
      embed.setDescription('No Favorite Demon Set.');
      embed.setThumbnail('');
    } else {
      embed.setDescription('Favorite Demon: ' + profObj.favorite);
      embed.setImage(profObj.favImg);
    }
    // Set Captured Demons and Profile Fields
    if(profObj.totalCaps == 0){
      embed.addFields({ name: '\u200B', value: profObj.mostDemon});
    } else {
      embed.addFields(
        {name: 'Most Captured Demon: ' + profObj.mostDemon, 
          value: 'Total Captures: ' + profObj.totalCaps }
      );
    }
    if(profObj.user.include("alyssaleanaxo")){
      embed.setFooter("Should Send Nipnuk's Owner a Thirst Trap");
    }
    return embed;
  }

  const getCaps = function(profObj){
    let list = "";
    const embed = new Discord.MessageEmbed()
    .setColor(profObj.color)
    .setFooter(profObj.footer)
    .setThumbnail(profObj.favImg)
    .setTitle(profObj.user + "\'s Captures");
    for([key, value] of manifesto.hunter){
      let capped = profObj.captures[key];
      if(capped != undefined) {
        list += (key.padEnd(25, ' ') + (capped + '\n'));
      }
    }
    embed.addFields( { name: '\u200B', value: list, inline: true});
    return embed;
  }

  const setFavorite = function(profObj, demon){
    profObj.favorite = demon;
    console.log(manifesto.tiers);
    console.log(manifesto.tiers.get("S Tier"));
    for( let [key, value] of manifesto.tiers ) {
      if(value.indexOf(demon) > -1) { 
        profObj.favTier = key;
        profObj.favImg = manifesto.hunter.get(demon);
        break;
      }
    }
    return output(profObj);
  }

  const setColor = function(profObj, c){
    if(Colors.colors.get(c)){
      profObj.color = Colors.colors.get(c);
    } else if (c.includes('#')){
      // only grab #123456 to smooth out user error
      profObj.color = c;
    } // allow hex color
    return output(profObj);
  }

module.exports = Profile;
module.exports.output   = output;
module.exports.caps     = getCaps;
module.exports.favorite = setFavorite;
module.exports.color    = setColor;