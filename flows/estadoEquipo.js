const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowEstadoEquipo = addKeyword(['1'])
    .addAnswer('Para saber el estado de tu equipo, por favor indícanos el número de recibo o el nombre con el que dejaste tu equipo. ¡Te actualizamos de inmediato!')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowEstadoEquipo;
