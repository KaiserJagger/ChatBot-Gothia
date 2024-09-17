const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowTempladosHidrogel = addKeyword(['templado', 'hidrogel', 'protector de pantalla', 'protector android'])
    .addAnswer('Tenemos disponibles protectores de pantalla templados y de hidrogel para celulares Android.')
    .addAnswer('Si nos indicas el modelo de tu celular, podemos ofrecerte las opciones disponibles y los precios para ambos tipos de protectores.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowTempladosHidrogel;
