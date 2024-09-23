const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowReparacionesServicios = addKeyword(['2'])
    .addAnswer('Ofrecemos una amplia gama de servicios de reparación para equipos electrónicos.')
    .addAnswer('Reparamos PCs y notebooks de marcas como Dell, HP, Lenovo, Asus, entre otras. ¿Qué problema tienes con tu equipo?')
    .addAnswer('Para celulares, tanto iPhone como Android, podemos ayudarte con problemas de hardware y software. ¿Qué tipo de reparación necesitas?')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowReparacionesServicios;
