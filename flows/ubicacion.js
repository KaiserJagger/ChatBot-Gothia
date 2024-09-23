const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowUbicacion = addKeyword(['5'])
.addAnswer('Nuestro local está ubicado en Av. Avellaneda 284 - 1° Piso.')
.addAnswer(commonFollowUpQuestion);

module.exports = flowUbicacion;