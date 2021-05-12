const Discord = require('discord.js');
const client = new Discord.Client();
///////config///////////
const configfile = require('./config.json');
var token = configfile.token;
var prefix = configfile.prefix;
var image = configfile.image;
var color = configfile.color;
var idWL = config.idWL;
////////////////////erreur token/////////////////
////console-message///
console.log("Dev By r4yan#0001 | d1or#0001")
////
const ID = [];
client.on("message", message => {
   if (message.content.startsWith(prefix + 'help')){
      message.delete()
      let serveur = message.guild;
      if (!serveur) return 
     let menu = new Discord.MessageEmbed()
     .setDescription('> ```Help Settings```')
     .addField("⊕```"+prefix+ "jail [Mention]```","**Jail une personne .**")//
     .addField("⊕```"+prefix+ "g-list```","**La liste des personnes jail.**")//
     .addField("⊕```"+prefix+ "shut```","**Restart le bot**")///
     .setImage(image)
     .setColor(color)
     .setFooter(`🔌・Dev by D4' | ${message.author.username}`, message.author.avatarURL())
     message.channel.send(menu)
     } 

if (message.content.startsWith(prefix + "jail")) {
   message.delete();
   if(idWLL.includes(message.author.id)) {
   ID.push(message.mentions.users.first().id);
   message.channel.send("⊕》`L'utilisateur : (" + message.mentions.users.first().username + ") est jail !`");
   console.log(`ID: ${ID.length}`);
   console.log(ID)
   }
};
if(message.content.startsWith(prefix + "g-list")){
    if(idWL.includes(message.author.id)) {
   let naolysatan = new Discord.MessageEmbed()
   .setDescription(`*Voici le nombre de personne jail:* 
   ${ID.length} `)
   .setFooter(`🔌・Dev by D4' | ${message.author.username}`, message.author.avatarURL())
   .setColor(color)
   message.channel.send(naolysatan)
}}
if (message.content.startsWith(`${prefix}shut`)) {
   if(idWL.includes(message.author.id)) {
        message.delete();
        var embed = new Discord.MessageEmbed()
            .setDescription("`Le bot se restart ,Pour une nouvelle utilisation.`")
            .setColor(color)
            .setFooter(`🔌・Dev by D4' | ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()
        message.channel.send(embed)
        setTimeout(function() {
            process.exit()
        }, 1000)

    }
}
});
client.on("message", msg => {
   if(msg.guild) {
   if(ID.includes(msg.author.id)) return msg.delete();
   }
})
client.login(token);