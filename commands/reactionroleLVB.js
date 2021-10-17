module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '899270379997126666';
        const EspagnolTeamRole = message.guild.roles.cache.find(role => role.name === "Espagnol");
        const ItalienTeamRole = message.guild.roles.cache.find(role => role.name === "Italien");
        const AllemandTeamRole = message.guild.roles.cache.find(role => role.name === "Allemand");

        const EspagnolTeamEmoji = '🇪🇸';
        const ItalienTeamEmoji = '🇮🇹';
        const AllemandTeamEmoji = '🇩🇪';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choisit ta langue LVB!')
            .setDescription('En choisissant votre langue, vous aurez la possibilité de communiquer avec les autres élèves du même group\n\n\n'
                + `${EspagnolTeamEmoji} for the Japan team\n`
                + `${ItalienTeamEmoji} for the Japan team\n`
                + `${AllemandTeamEmoji} for the Maths team`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(EspagnolTeamEmoji);
        messageEmbed.react(ItalienTeamEmoji);
        messageEmbed.react(AllemandTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === EspagnolTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(EspagnolTeamRole);
                }
                if (reaction.emoji.name === ItalienTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ItalienTeamRole);
                }
                if (reaction.emoji.name === AllemandTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AllemandTeamEmoji);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === EspagnolTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(EspagnolTeamRole);
                }
                if (reaction.emoji.name === ItalienTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ItalienTeamRole);
                }
                if (reaction.emoji.name === AllemandTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AllemandTeamEmoji);
                }
            } else {
                return;
            }

        });
    }

}