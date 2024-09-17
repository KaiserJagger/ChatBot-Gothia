const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowDesbloqueoPin = addKeyword(['desbloqueo', 'icloud', 'desbloquear iphone'])
    .addAnswer('Sí realizamos desbloqueos, pero depende del modelo y situación del equipo. Para más información, indícanos los detalles de tu equipo.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowDesbloqueoPin;
