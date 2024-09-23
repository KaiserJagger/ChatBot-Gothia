const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowHorarios = addKeyword(['7'])
    .addAnswer('Nuestros horarios de atención son de Lunes a Viernes de 9 a 18hs y sábados de 8 a 15hs.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowHorarios;
