// Respuesta común para todas las opciones
const commonFollowUpQuestion = '¿Hay algo más en lo que pueda ayudarte? (Escribe "SI" para más opciones o "NO" para finalizar)';

// Generar menú dinámico basado en las opciones del bot
const menuOpciones = [
    { keyword: 'Estado', description: '👉 *Estado* para consultar el estado de tu equipo.' },
    { keyword: 'Garantía', description: '👉 *Garantía* para preguntas sobre garantía.' },
    { keyword: 'Medios de pago', description: '👉 *Medios de pago* para formas de pago.' },
    { keyword: 'Horarios', description: '👉 *Horarios* para conocer nuestros horarios.' },
    { keyword: 'Demoras', description: '👉 *Demoras* para saber si la reparación puede hacerse en el día.' },
    { keyword: 'Precios', description: '👉 *Precios* para consultas sobre el cambio de piezas.' },
    { keyword: 'Accesorios', description: '👉 *Accesorios* para información sobre cargadores, cables, fundas y más.' },
    { keyword: 'Templado', description: '👉 *Templado* o *hidrogel* para protectores de pantalla para Android.' },
    { keyword: 'Retiro', description: '👉 *Retiro* para coordinar retiro de equipos a domicilio.' },
    { keyword: 'Envío', description: '👉 *Envío* para consultar sobre envíos de accesorios.' },
    { keyword: 'Reparaciones', description: '👉 *Reparaciones* para conocer nuestros servicios de reparación.' },
];

const generarMenu = () => {
    return menuOpciones.map(opcion => opcion.description).join('\n');
};

module.exports = { commonFollowUpQuestion, generarMenu };
