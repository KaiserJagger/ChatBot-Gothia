const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowRetiroDomicilio = addKeyword(['9'])
    .addAnswer('Ofrecemos el servicio de retiro a domicilio solo en zona céntrica.')
    .addAnswer('Para coordinar el retiro, por favor indícanos tu dirección exacta y el equipo que necesitas que retiremos.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowRetiroDomicilio;
