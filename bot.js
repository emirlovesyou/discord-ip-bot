import { Client, GatewayIntentBits } from 'discord.js';
import open from 'open';

const token = 'YOUR_DISCORD_BOT_TOKEN';
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const url = 'https://www.belirtilenlink.com'; // Açmak istediğiniz URL

client.once('ready', () => {
    console.log(`Bot olarak giriş yapıldı: ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!bilgi') {
        open(url).then(() => {
            message.channel.send(`Açılan URL: ${url}`);
        }).catch(err => {
            console.error('Bir hata oluştu:', err);
            message.channel.send('Bir hata oluştu, URL açılamadı.');
        });
    }
});

client.login(token);
