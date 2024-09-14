const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot'); 
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MongoAdapter = require('@bot-whatsapp/database/mongo');

/**
 * Declaramos las conexiones de Mongo
 */
const MONGO_DB_URI = 'mongodb+srv://nicoandreolligothia:ksLkiCPu4Ln8r3o4@cluster0.a2obp.mongodb.net/';
const MONGO_DB_NAME = 'db_bot';

/**
 * Flujo para el estado del equipo
 */
const flowEstadoEquipo = addKeyword(['estado', 'estado de mi equipo', 'novedades', 'consultar sobre mi equipo'])
    .addAnswer('Para saber el estado de tu equipo, por favor indícanos el número de recibo o el nombre con el que dejaste tu equipo. ¡Te actualizamos de inmediato!')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para preguntas sobre garantía
 */
const flowGarantia = addKeyword(['garantía', 'preguntas sobre garantía'])
    .addAnswer('Nuestras reparaciones incluyen garantía, que varía según el servicio o pieza. ¿Te gustaría saber la garantía específica para el trabajo realizado en tu equipo?')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para medios de pago
 */
const flowMediosPago = addKeyword(['medios de pago', 'formas de pago', 'pago'])
    .addAnswer('Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y QR. ¿Te gustaría conocer más detalles sobre algún método de pago?')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para preguntas sobre horarios
 */
const flowHorarios = addKeyword(['horarios', 'horario de atención', 'cuando están abiertos'])
    .addAnswer('Nuestros horarios de atención son de Lunes a Viernes de 9 a 18hs de corrido y sábados de 8 a 15.00hs. ¿En qué podemos ayudarte?')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para consultas sobre demoras
 */
const flowDemoras = addKeyword(['demoras', 'se hace al momento', 'se puede hacer al acto'])
    .addAnswer('Algunas reparaciones pueden hacerse en el día, dependiendo del tipo de trabajo. Para un diagnóstico más rápido, te sugerimos traer tu equipo lo antes posible.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para precios de cambio de piezas
 */
const flowPreciosPiezas = addKeyword(['precios', 'cambio de piezas', 'batería', 'tapa', 'glass', 'módulo', 'pin', 'flex', 'cámara'])
    .addAnswer('Los precios de cambio de piezas varían según el modelo de tu equipo. Si nos pasas el modelo, podemos darte un estimativo para batería, tapa, glass, módulo, pin, flex, o cámara.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para recibir equipos Android/Samsung y notebooks de otras marcas
 */
const flowRecibirEquipos = addKeyword(['reciben equipos', 'Android', 'Samsung', 'notebooks'])
    .addAnswer('Sí, recibimos equipos tanto de Apple (iOS) como de Android para reparación. ¿Podrías decirme el modelo de tu celular para darte más detalles?')
    .addAnswer('Además de equipos Apple, también reparamos PCs y notebooks de otras marcas líderes. ¿Qué marca y modelo de PC o notebook necesitas reparar?')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para preguntas sobre accesorios de iPhone
 */
const flowAccesorios = addKeyword(['accesorios', 'cargadores', 'cables', 'fundas', 'templados', 'protector de cámara'])
    .addAnswer('Tenemos disponibles cargadores, cables, fundas, templados y protectores de cámara para iPhone. Indícanos tu modelo para darte más información.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para desbloqueos de iCloud
 */
const flowDesbloqueoPin = addKeyword(['desbloqueo', 'icloud', 'desbloquear iphone'])
    .addAnswer('Sí realizamos desbloqueos, pero depende del modelo y situación del equipo. Para más información, indícanos los detalles de tu equipo.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para retiros a domicilio
 */
const flowRetiroDomicilio = addKeyword(['retiro', 'domicilio', 'retirar equipo'])
    .addAnswer('Ofrecemos el servicio de retiro a domicilio solo en zona céntrica.')
    .addAnswer('Para coordinar el retiro, por favor indícanos tu dirección exacta y el equipo que necesitas que retiremos.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para envíos de accesorios
 */
const flowEnvioAccesorios = addKeyword(['envío', 'accesorio', 'enviar accesorio'])
    .addAnswer('Realizamos envíos de accesorios, pero solo en zona céntrica.')
    .addAnswer('Por favor, indícanos el accesorio que necesitas y tu ubicación, y te proporcionaremos los detalles del envío.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para consultas sobre templados e hidrogel para celulares Android
 */
const flowTempladosHidrogel = addKeyword(['templado', 'hidrogel', 'protector de pantalla', 'protector android'])
    .addAnswer('Tenemos disponibles protectores de pantalla templados y de hidrogel para celulares Android.')
    .addAnswer('Si nos indicas el modelo de tu celular, podemos ofrecerte las opciones disponibles y los precios para ambos tipos de protectores.')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');

/**
 * Flujo para consultas sobre reparaciones y servicios
 */
const flowReparacionesServicios = addKeyword(['reparaciones', 'servicios', 'reparar pc', 'reparar notebook'])
    .addAnswer('Ofrecemos una amplia gama de servicios de reparación para equipos electrónicos.')
    .addAnswer('Para PC y notebooks, reparamos de marcas líderes como Dell, HP, Lenovo y Asus. ¿Qué problema tienes con tu equipo?')
    .addAnswer('Para reparaciones de celulares, ya sea iPhone o Android, podemos ayudarte con problemas de hardware, software, y más. ¿Qué tipo de reparación necesitas?')
    .addAnswer('¿Hay algo más en lo que pueda ayudarte?');


/**
 * Flujo principal para saludo e indicaciones
 */
const flowSaludo = addKeyword(['hola', 'ole', 'alo', 'buen dia', 'buenas tardes', 'buenas noches', 'buenas'])
    .addAnswer('🙌 Hola, bienvenido al chatbot de GOTHIA. ¿Cómo puedo ayudarte hoy?')
    .addAnswer(
        [
            '👉 *Estado* para consultar el estado de tu equipo.',
            '👉 *Garantía* para preguntas sobre garantía.',
            '👉 *Medios de pago* para formas de pago.',
            '👉 *Horarios* para conocer nuestros horarios.',
            '👉 *Demoras* para saber si la reparación puede hacerse en el día.',
            '👉 *Precios* para consultas sobre el cambio de piezas.',
            '👉 *Accesorios* para información sobre cargadores, cables, fundas y más.',
            '👉 *Templado* o *hidrogel* para protectores de pantalla para Android.',
            '👉 *Retiro* para coordinar retiro de equipos a domicilio.',
            '👉 *Envío* para consultar sobre envíos de accesorios.',
            '👉 *Reparaciones* para conocer nuestros servicios de reparación.',
        ],
        null,
        null,
        [flowEstadoEquipo, flowGarantia, flowMediosPago, flowHorarios, flowDemoras, flowPreciosPiezas, flowRecibirEquipos, flowAccesorios, flowDesbloqueoPin, flowRetiroDomicilio, flowEnvioAccesorios, flowTempladosHidrogel, flowReparacionesServicios]
    );

/**
 * Inicialización del bot
 */
const main = async () => {
    try {
        const adapterDB = new MongoAdapter({
            dbUri: MONGO_DB_URI,
            dbName: MONGO_DB_NAME,
        });
        const adapterFlow = createFlow([flowSaludo]);
        const adapterProvider = createProvider(BaileysProvider);
        await createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        });
        QRPortalWeb();
    } catch (error) {
        console.error('Error al inicializar el bot:', error);
    }
};

main();
   