const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowHoraYUbi = addKeyword(['7'])
    .addAnswer('Nuestros horarios de atención son de Lunes a Viernes de 9 a 18hs y sábados de 8 a 15hs.')
    .addAnswer('Nuestro local está ubicado en Av. Avellaneda 284, 1° Piso')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowHoraYUbi;
