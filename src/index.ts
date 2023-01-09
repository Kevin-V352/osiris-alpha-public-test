import { generateOrderMessage, showHelp } from "@/controllers";
import { whatsapp } from '@/config';

//* Callbacks
whatsapp.client.on('message', (message) => {
	if (message.body.startsWith('@comprar')) generateOrderMessage(message);
	else if (message.body.startsWith('@ayuda')) showHelp(message);
});