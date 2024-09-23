// Respuesta común para todas las opciones
const commonFollowUpQuestion = '¿Hay algo más en lo que pueda ayudarte? (Escribe nuevamente un número o "NO" para finalizar)';

// Generar menú dinámico basado en las opciones del bot
const menuOpciones = [
    { description: '*Escriba algunas de las opciones:*'},    
    { keyword: '1', description: '👉 *1:* para consultar el estado de tu equipo.' },
    { keyword: '2', description: '👉 *2:* para conocer nuestros servicios de reparación.' },
    { keyword: '3', description: '👉 *3:* para conocer que equipos recibimos para reparaciones o servicios.' },
    { keyword: '4', description: '👉 *4:* para consultas sobre el cambio de piezas.' },
    { keyword: '5', description: '👉 *5:* para saber si la reparación puede hacerse en el día.' },
    { keyword: '6', description: '👉 *6:* para información sobre cargadores, cables, fundas y más.' },
    { keyword: '7', description: '👉 *7:* para conocer nuestros horarios.' },
    { keyword: '8', description: '👉 *8:* para saber donde estamos ubicados.' },
    { keyword: '9', description: '👉 *9:* para preguntas sobre garantía.' },
    { keyword: '10', description: '👉 *10:* para ver nuestras formas de pago.' },
    { keyword: '11', description: '👉 *11:* para coordinar retiro de equipos a domicilio.' },
];

const generarMenu = () => {
    return menuOpciones.map(opcion => opcion.description).join('\n');
};

module.exports = { commonFollowUpQuestion, generarMenu };
