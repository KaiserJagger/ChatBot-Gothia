const { addKeyword } = require('@bot-whatsapp/bot');

const flowFinalizarConversacion = addKeyword(['no', 'No', 'NO'])
    .addAnswer('Gracias por comunicarte con nosotros. ¡Que tengas un excelente día! 😊')
    .addAnswer('Si tienes más consultas, no dudes en contactarnos nuevamente. ¡Hasta luego!');

module.exports = flowFinalizarConversacion;
