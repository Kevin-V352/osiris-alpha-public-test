import WAWebJS from 'whatsapp-web.js';

import { whatsapp } from '@/config';
import { formatters } from '@/utils';
import { getOrderById } from '@/services';

export const generateOrderMessage = async (message: WAWebJS.Message) => {

  const { from, body } = message;

  const orderId = body.replace('@comprar', '').trim();

  const [order] = await getOrderById(orderId);

  if (!order) {
    whatsapp.client.sendMessage(
      from,
      formatters.messageTemplate(
        `No existe ninguna orden de compra con el código: *${orderId}*`,
        'Validación para orden de compra 🍻',
        true,
        'Servicio potenciado por T&L.'
      )
    );
    return;
  }

  let productsString = '';

  const { 
    name,
    phoneNumber,
    paymentMethod,
    deliveryMethod,
    city,
    address,
  } = order;

  order?.products.forEach(({ title, price, quantity }) => {

    productsString = `${productsString}*- ${title} (x${quantity})* - _${formatters.currencyFormat(price * quantity)}_\n`;

  });

  const description = '¡Saludos! Esta es una respuesta automatizada. Aquí hay un resumen de su orden. 🍻';
  const userData = `*🧾 DATOS DEL CLIENTE*\n*- Nombre:* ${name}\n*- Teléfono:* ${phoneNumber}\n*- Método de pago:* ${paymentMethod}\n*- Método de entrega:* ${deliveryMethod}${(deliveryMethod === 'home_delivery') ? (`\n*- Ciudad:* ${city}\n*- Dirección:* ${address}`) : ''}`;
  const productList = `*🛍️ PRODUCTOS*\n${productsString}`;
  const warning = '*🛑 NOTA IMPORTANTE: Solo debe pagar el monto cuando el distribuidor llegue a su domicilio o cuando usted llegue al local.*';
  const totalPrice =`*✅ PRECIO FINAL: ${formatters.currencyFormat(order.totalPrice)}*`;

  const messageBody = `${description}\n\n${userData}\n\n${productList}\n${warning}\n\n${totalPrice}`;

  whatsapp.client.sendMessage(
    from,
    formatters.messageTemplate(
      messageBody,
      `ORDEN DE COMPRA: ${order?.id}`
    )
  );

};