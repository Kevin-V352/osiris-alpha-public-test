import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal';

//* TEST :D

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message) => {
	console.log(message.body);
  client.sendMessage(message.from, message.body);
});

client.initialize();