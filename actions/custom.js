module.exports = function({DBM, Actions, Files, Events, tempVars, serverVars, globalVars}, client){client.on("messageDelete", (message) => { const content = message.content; const author = message.author.tag; const channel = message.channel.name; const embed = { "title": "Message from " + author + " removed", "description": content, "color": 9902553, "footer": { "text": "In: " + channel } }; message.guild.channels.find('name', 'audit').send({ embed }); }); }
