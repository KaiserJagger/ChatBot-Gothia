const { addKeyword } = require('@bot-whatsapp/bot');
const { generarMenu, commonFollowUpQuestion } = require('./common');
const flowFinalizarConversacion = require('./finalizarConversacion');

const flowSeleccionOpciones = addKeyword(['SI'])
    .addAnswer(generarMenu())
    .addAnswer(commonFollowUpQuestion, null, null, [flowFinalizarConversacion]);

const flowNo = addKeyword(['NO', 'no', 'No'])
    .addAnswer('Gracias por comunicarte con nosotros. ¡Que tengas un excelente día! 😊')
    .addAnswer('Si tienes más consultas, no dudes en contactarnos nuevamente. ¡Hasta luego!', null, null, [flowFinalizarConversacion]);

module.exports = { flowSeleccionOpciones, flowNo };
