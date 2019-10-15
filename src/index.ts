import Telegraf from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx: any) => ctx.reply('Welcome!'));

bot.launch();
