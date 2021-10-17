const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '!' ;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot.105 is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Eleve');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('899265020876173322').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'russia'){
        client.commands.get('russia').execute(message, args)
    } else if (command === 'reactionroleLVB') {
        client.commands.get('reactionroleLVB').execute(message, args, Discord, client)
    }
});

client.login('ODk4ODY1MzY4MDEyMDM0MDQ5.YWqbmw.FEszEzEG9n0uoclk4_6Tpzggqdo');