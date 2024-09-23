const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowAccesorios = addKeyword(['8'])
    .addAnswer('Tenemos disponibles cargadores, cables, fundas, templados y protectores de cámara para iPhone. Indícanos tu modelo para darte más información.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowAccesorios;
