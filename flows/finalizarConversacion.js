const { addKeyword } = require('@bot-whatsapp/bot');

const flowFinalizarConversacion = addKeyword(['no'])
    .addAnswer('Gracias por comunicarte con nosotros. ¡Que tengas un excelente día! 😊');

module.exports = flowFinalizarConversacion;
