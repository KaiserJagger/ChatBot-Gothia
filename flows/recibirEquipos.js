const { addKeyword } = require('@bot-whatsapp/bot');
const { commonFollowUpQuestion } = require('./common');

const flowRecibirEquipos = addKeyword(['reciben equipos', 'Android', 'Samsung', 'notebooks'])
    .addAnswer('Sí, recibimos equipos tanto de Apple (iOS) como de Android para reparación. ¿Podrías decirme el modelo de tu celular para darte más detalles?')
    .addAnswer('También reparamos PCs y notebooks de otras marcas líderes. ¿Qué marca y modelo de PC o notebook necesitas reparar?')
    .addAnswer(commonFollowUpQuestion);

module.exports = flowRecibirEquipos;
