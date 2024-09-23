// Respuesta común para todas las opciones
const commonFollowUpQuestion = '¿Hay algo más en lo que pueda ayudarte? (Escribe "SI" para más opciones o "NO" para finalizar)';

// Generar menú dinámico basado en las opciones del bot
const menuOpciones = [
    { keyword: '1', description: '👉 *Estado* para consultar el estado de tu equipo.' },
    { keyword: '2', description: '👉 *Garantía* para preguntas sobre garantía.' },
    { keyword: '3', description: '👉 *Medios de pago* para formas de pago.' },
    { keyword: '4', description: '👉 *Horarios* para conocer nuestros horarios.' },
    { keyword: '5', description: '👉 *Ubicación* para saber donde estamos ubicados.' },
    { keyword: '6', description: '👉 *Demoras* para saber si la reparación puede hacerse en el día.' },
    { keyword: '7', description: '👉 *Precios* para consultas sobre el cambio de piezas.' },
    { keyword: '8', description: '👉 *Accesorios* para información sobre cargadores, cables, fundas y más.' },
    { keyword: '9', description: '👉 *Retiro* para coordinar retiro de equipos a domicilio.' },
    { keyword: '10', description: '👉 *Reparaciones* para conocer nuestros servicios de reparación.' },
    { keyword: '11', description: '👉 *Equipos* para conocer que equipos recibimos para reparaciones o servicios.' },
];

const generarMenu = () => {
    return menuOpciones.map(opcion => opcion.description).join('\n');
};

module.exports = { commonFollowUpQuestion, generarMenu };
