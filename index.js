// Webserver
const express   = require('express');
const app       = express();
//const http      = require('http').Server(app);
const port      = 3000;

app.listen(port, () => {
  console.log('Server Running through port ' + port);
})


// Database ( Repl.it )
const Database = require("@replit/database");
const db       = new Database();
const Profile  = require('./data/profile');

// create new user function
const unknownUser = function(userid, username){ 
  var nUser = new Profile(username);
  db.set(userid, username);
}

// --- Bot Code ---
const Discord   = require("discord.js");
const commands  = require('./commands'); // commands.js import
const mPlus     = require('./mythicplus') // m+ Wow Import
const client = new Discord.Client();
const botUserID = '860605357343637535';

// declare gacha collection and response collectors
var gachaCollect = function(sent){
  const catchFilt = (reaction, user) => {
    return ['👹', '⚠️'].includes(reaction.emoji.name) && user.id != botUserID;
  };
  sent.react('👹'); 
  sent.react('⚠️');
  sent.awaitReactions(catchFilt, {max: 1, time: 10000, errors: ['time']})
    .then(collected => {
      const reaction = collected.first();
      if(reaction.emoji.name === '👹'){
        // get reaction from on-bot User
        let userID = Array.from(reaction.users.cache.keys()).pop();
        let name = reaction.users.cache.get(userID).username;
        // check if user is in the database before updating captures
        db.get(userID).then(val => {
          if(val === null){ unknownUser(userID, name); }
        });
        // update captures in uyser Profile
        db.get(userID).then(user => {
          //sent.channel.send("Successful Capture!");
          if(user.captures[sent.embeds[0].title]){
            user.captures[sent.embeds[0].title] += 1;
          } else {
            user.captures[sent.embeds[0].title] = 1;
          }
            user.totalCaps += 1;
          // check for most captured demon and update
          if(user.mostCaps < user.captures[sent.embeds[0].title]){
            user.mostDemon = sent.embeds[0].title;
            user.mostCaps  = user.captures[sent.embeds[0].title];
          }
          // Update Database Info after Capture
          db.set(userID, user);
          var prevEmbed = sent.embeds[0];
          prevEmbed.setDescription("Captured by: " + user.user);
          sent.edit(prevEmbed);
        })
    } else { // Takedown Command
      // Police Embed for the cursed gacha pull
      const policeEmbed = new Discord.MessageEmbed()
            .setColor('#cf2929')
            .setTimestamp()
            .setFooter("Nipnuk Police Takedown", 'https://i.imgur.com/aMiCkAM.png')
            .setImage('https://i.imgur.com/o1GGejt.png')
            .setTitle('Image Takedown..')
            .setDescription('Nipnuk Police have taken the previous image down for user safety');
      sent.edit(policeEmbed); // sent.edit
    }
  }).catch(collected => {
    sent.reactions.removeAll().catch(error => console.error('Failed to remove all reacts', error));
  });
}

// response collector
var waitResponse = function(userID, msg){
  let pref     = msg.content.split(' ');
  let command  = pref[0] + ' ' + pref[1];
  // If user does not exist in database; end the pipeline early
  db.get(userID).then(profile => {
    if(profile === null) { 
      return "User \""+ msg.mentions.users.get(id).username + "\" does not exist in the Gacha Void System";
    }
    let m = commands.profileParse(command, profile, pref[pref.length - 1]);
    db.set(userID, profile);
    // if something was changed below will output usual profile embed
    if(m != "Invalid Command"){ msg.channel.send(m); }
  });
}

// Check if Bot is logged in
//client.on('debug', console.log);
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('for n; help', {type: "WATCHING"})
})

// Search for commands in the bot
client.on("message", msg => {
  if(msg.author.bot) return;

  if(msg.content.startsWith("n;"))
  { 
    // 8 BALL COMMANDS
    if(msg.content.includes("?")){ // find question response
      msg.channel.send(commands.parse("?"));
    }
    // WOW M+ COMMANDS
    else if(msg.content.includes("affixes")){
      if(msg.content.includes("next")){ // parse next
        msg.channel.send(mPlus.getNextAffixes);
      }
      else {
        msg.channel.send(mPlus.getAffixes);
      }
    }
    // GACHA BOT AND USER PROFILE COMMANDS
    else if(msg.content.includes("@")){ // allow users to check anyones profile
      // CONTENT WITH AN @ has form: <!@ USERID >
      var targets = msg.mentions.users.keys();
      for( var id of targets ) {
        //console.log(msg.mentions.users.get(id));
        db.get(id).then(user => {
        if(user === null) {
          msg.channel.send("User \""+ msg.mentions.users.get(id).username 
              + "\" does not exist in the Gacha Void System");
        } else { msg.channel.send(Profile.output(user)); }
        });
      }
    }
    else if (msg.content.includes("profile")){
      db.get(msg.author.id).then(val => {
        if(val === null){
          unknownUser(msg.author.id, msg.author.username);
          val = db.get(msg.author.id);
        }
        var emb = Profile.output(val);
        emb.setAuthor(val.user);
        msg.channel.send(emb);
      });
    }
    else {
      let lowerContent = msg.content.toLowerCase();
      // check if user command is in either profile or normal command map
      let m = commands.parse(lowerContent); // allow caps in commands
      if(m === "Invalid Command") {
        waitResponse(msg.author.id, msg);
      }
      // if successful command check gacha
      if(m != "Invalid Command") { // IF VALID THEN DO
        msg.channel.send(m).then(sent => {
          if(msg.content.toLowerCase() === "n; p")
          { gachaCollect(sent); } 
        })
      } // else no more commands possible just ignore
    }
  }
})

client.login(process.env.TOKEN)
// Notes
// Image Dump
// https://imgur.com/a/QsI8jfZ
