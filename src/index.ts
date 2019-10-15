import Telegraf from 'telegraf';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx: any) => ctx.reply('Welcome!'));

bot.launch();

app.post('/docker-service-status', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).end();
});

app.listen(process.env.BOT_PORT, () => {
  console.log(`Bot started at port ${process.env.BOT_PORT}`);
});
