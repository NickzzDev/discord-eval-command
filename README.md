# discord-eval-command

This command allows Staff Members or the Owner to evaluate commands and lines throughout the bot such as `message.author.id` or `client.user.tag` etc.

This code has been made in V13. I will not provide V12 Code, but its plain simple to change back to. 

you will need to install the util dependency by doing `npm i util`.

This command should purely be for the Owner, because if you allow other Staff members to use this, they can do `client.token`, which will give the bot's token, which then the staff member can use the token and cause chaos! So please be aware of that. Since this can happen, i have made the command only work when its the Owner who does the command, but this can be changed to a permission, like ADMINISTRATOR, but i would advise not to. 

Hope you enjoy!
