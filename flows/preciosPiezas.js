const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowPreciosPiezas = addKeyword(['4'])
    .addAnswer('Los precios de cambio de piezas varían según el modelo de tu equipo. Si nos pasas el modelo, podemos darte un estimativo para batería, tapa, glass, módulo, pin, flex, o cámara.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowPreciosPiezas;
