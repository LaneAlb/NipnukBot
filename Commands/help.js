// includes / "require"
const Discord = require('discord.js');
const Imgs    = require('../data/imageManifesto');

const helpEmbed = new Discord.MessageEmbed()
  .setColor('#9729cf') //purple
  .setThumbnail('https://i.imgur.com/aMiCkAM.png')
  .setTimestamp()
  .setTitle('Nipnuk Help Menu')
  .setDescription('Invoke any below command by typing **n;** then the command!')
  .addFields(
    { name: '\u200B'    , value: ':scroll:**__GENERAL:__**'},
    { name: '**Nipnuk**', value: "Don't know what he looks like? No problem we have a picture for that", inline: true},
    { name: '\u200B'    , value: '\u200B', inline: true},
    { name: '**Shoot**' , value: "Have Nipnuk shoot some felbolts!", inline: true },
    { name: '**Ask Anything**     ', value: "End anything with a '?' and Nipnuk will    respond", inline: true },
    { name: '\u200B'    , value: '\u200B', inline: true},
    { name: '**Police**', value: "Get some help from the Nipnuk's Police Force", inline: true},

    { name: '\u200B'    , value: ':spy:**__PROFILE:__**'},
    { name: '**Profile**', value: "Display your profile.", inline: true},
    { name: '\u200B'    , value: '\u200B', inline: true},
    { name: '**Set Favorite**' , value: "Set your favorite demon to be displayed on your profile!", inline: true },
    { name: '**Set Color**', value: "Set the color displayed on the side of your profile.", inline: true },
    { name: '\u200B'    , value: '\u200B', inline: true},
    { name: '**Captures**', value: "Display all of your captured gacha demons!", inline: true},

    { name: '\u200B', value: ':game_die:**__GACHA:__**'},
    { name: '**p**' , value: "Roll a Demon from the Nipnuk Gacha", inline: true},
    { name: '\u200B'    , value: '\u200B', inline: true},
    { name: '**(*Tier*)Demons**', value: "Show the specific demons inside a tier within the gacha bot. *Valid Tiers are: U, S, A, B, C*", inline: true},
  );

const demonEmbed = new Discord.MessageEmbed()
  .setColor('#9729cf') //purple
  .setThumbnail('https://i.imgur.com/aMiCkAM.png');
  
var sendHelp = function(){ 
  return helpEmbed;
}

// Unobtainable Tier Embed
var demonU = function(){
  demonEmbed.fields = [];
  demonEmbed.setDescription('This is everything within my Unobtainable Tier, consider these ones just as good as me but harder to find.');
  demonEmbed.setTitle('Unobtainable Tier');
  demonEmbed.addFields({name: '\u200B', value: '\u200B'});
  Imgs.tiers.get("Unobtainable Tier").forEach(demon => demonEmbed.addFields(
    {name:  demon, value: '\u200B', inline: true})
  );
  // special Aly Modification
  demonEmbed.addFields({name: '\u200B', value: '\u200B', inline: true}, {name: "Aly's Thirst Trap", value: 'Nearly all sources point to this being impossible to find. *Even for the almighty Nipnuk*', inline: true});
  return demonEmbed;
}
// S Tier Embed
var demonS = function(){
  demonEmbed.fields = [];
  demonEmbed.setDescription('This is everything within my S Tier, I guess they are considered as good as me. To most people that is...');
  demonEmbed.setTitle('S Tier');
  demonEmbed.addFields({name: '\u200B', value: '\u200B'});
  Imgs.tiers.get("S Tier").forEach(demon => demonEmbed.addFields(
    {name:  demon, value: '\u200B', inline: true})
  );
  return demonEmbed;
}
// A Tier Embed
var demonA = function(){
  demonEmbed.fields = [];
  demonEmbed.setDescription('This is everything within my A Tier, while not as good as me they do provide a benefit to those around them.');
  demonEmbed.setTitle('A Tier');
  demonEmbed.addFields({name: '\u200B', value: '\u200B'});
  Imgs.tiers.get("A Tier").forEach(demon => demonEmbed.addFields(
    {name:  demon, value: '\u200B', inline: true})
  );
  return demonEmbed;
}
// B Tier Embed
var demonB = function(){
  demonEmbed.fields = [];
  demonEmbed.setDescription('This is everything within my B Tier, Consider these demons... *useful*.');
  demonEmbed.setTitle('B Tier');
  demonEmbed.addFields({name: '\u200B', value: '\u200B'});
  Imgs.tiers.get("B Tier").forEach(demon => demonEmbed.addFields(
    {name:  demon, value: '\u200B', inline: true})
  );
  return demonEmbed;
}
// C Tier Embed
var demonC = function(){
  demonEmbed.fields = [];
  demonEmbed.setDescription('This is everything within my C Tier... SIKE YOU IMPS THOUGHT I WOULD SHOW YOU EVERY MEDIOCRE THING INSIDE MY VOID GACHA SYSTEM HAHAHAHAHA *cute*.');
  demonEmbed.setTitle('Mediocre Tier');
  demonEmbed.addFields( {name: '\u200B', value: '\u200B'},
    {name: 'A lot', value: "The almighty one seems to be disinterested in showing the entire this of the 'mediocre' C Tier."}
  );
  return demonEmbed;
}

module.exports.sendHelp = sendHelp;
module.exports.demonListU= demonU;
module.exports.demonListS= demonS;
module.exports.demonListA= demonA;
module.exports.demonListB= demonB;
module.exports.demonListC= demonC;