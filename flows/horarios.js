const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowHorarios = addKeyword(['horarios', 'horario de atención', 'cuando están abiertos', 'ubicación', 'domicilio', 'donde se encuentran', 'donde queda el local'])
    .addAnswer('Nuestros horarios de atención son de Lunes a Viernes de 9 a 18hs y sábados de 8 a 15hs.')
    .addAnswer('Nuestro local está ubicado en: Av. Avellaneda 284 - 1° Piso. Puedes visitarnos en ese horario.')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowHorarios;
