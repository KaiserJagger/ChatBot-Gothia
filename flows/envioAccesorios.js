const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowEnvioAccesorios = addKeyword(['envío', 'accesorio', 'enviar accesorio'])
    .addAnswer('Realizamos envíos de accesorios, pero solo en zona céntrica.')
    .addAnswer('Por favor, indícanos el accesorio que necesitas y tu ubicación, y te proporcionaremos los detalles del envío.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowEnvioAccesorios;
