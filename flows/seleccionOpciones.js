const { addKeyword } = require('@bot-whatsapp/bot');
const { generarMenu, commonFollowUpQuestion } = require('./common');
const flowFinalizarConversacion = require('./finalizarConversacion');

const flowSeleccionOpciones = addKeyword(['SI', 'NO'])
    .addAnswer(generarMenu())
    .addAnswer(commonFollowUpQuestion, null, null, [flowFinalizarConversacion]);

module.exports = flowSeleccionOpciones;
