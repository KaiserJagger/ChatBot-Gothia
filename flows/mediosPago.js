const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowMediosPago = addKeyword(['medios de pago', 'formas de pago', 'pago'])
    .addAnswer('Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y QR. ¿Te gustaría conocer más detalles sobre algún método de pago?')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowMediosPago;
