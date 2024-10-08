const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common.js');

const flowGarantia = addKeyword(['2'])
    .addAnswer('Nuestras reparaciones incluyen garantía, que varía según el servicio o pieza. ¿Te gustaría saber la garantía específica para el trabajo realizado en tu equipo?')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowGarantia;
