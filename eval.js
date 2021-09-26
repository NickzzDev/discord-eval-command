const Discord = require('discord.js');
const { inspect } = require('util');

exports.run = async(client, msg, args) => {
    if (msg.author.id !== 'Owners_ID_goes_here') return; // Add the Owners id here

    const code = args.join(" ");
    if (!code) return msg.reply('Please Provide Some Code to Evaluate!'); // Bot returns if no code is given like `message.author.id`

    try {
        const result = await eval(code);
        let output = result;
        if(typeof result !== 'string') {
            output = inspect(result);
        }
        msg.channel.send(output, { code: "js" });  
    } catch (error) {
        msg.channel.send({ content:':x: Sorry, that either did not work, or was too long to send?' }); // returns message if error
    }

}
