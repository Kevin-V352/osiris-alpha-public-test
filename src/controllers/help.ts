import WAWebJS from "whatsapp-web.js";

import { whatsapp } from '@/config';
import { formatters } from '@/utils';

export const showHelp = (message: WAWebJS.Message) => {

  const { from } = message;
  
  const commandList = [
    {
      name: '@comprar [código de compra]',
      description: 'Muestra un resumen de la orden e informa al vendedor de la compra del cliente.'
    },
    {
      name: '@ayuda',
      description: 'Muestra una lista con todos los comandos disponibles.'
    }
  ];

  let commandsString = '';

  commandList.forEach(({ name, description }) => {

    commandsString = `${commandsString}*- ${name}* ${description}\n`;
  
  });

  const description = '¡Saludos! Aquí hay una lista de los comandos disponibles. 🤖'

  const title = 'Comandos';
  const body = `${description}\n\n${commandsString}`;

  whatsapp.client.sendMessage(
    from,
    formatters.messageTemplate(
      body,
      title
    )
  );

};