const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowDemoras = addKeyword(['6'])
    .addAnswer('Algunas reparaciones pueden hacerse en el día, dependiendo del tipo de trabajo. Para un diagnóstico más rápido, te sugerimos traer tu equipo lo antes posible.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowDemoras;
