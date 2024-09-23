const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot'); 
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MongoAdapter = require('@bot-whatsapp/database/mongo');

// Importamos los flujos desde sus respectivos archivos
const flowEstadoEquipo = require('./flows/estadoEquipo.js');
const flowGarantia = require('./flows/garantia.js');
const flowMediosPago = require('./flows/mediosPago.js');
const flowHorarios = require('./flows/horarios.js');
const flowUbicacion = require('./flows/ubicacion.js')
const flowDemoras = require('./flows/demoras.js');
const flowPreciosPiezas = require('./flows/preciosPiezas.js');
const flowRecibirEquipos = require('./flows/recibirEquipos.js');
const flowAccesorios = require('./flows/accesorios.js');
const flowRetiroDomicilio = require('./flows/retiroDomicilio.js');
const flowReparacionesServicios = require('./flows/reparacionesServicios.js');
const flowFinalizarConversacion = require('./flows/finalizarConversacion.js');
const flowSeleccionOpciones = require('./flows/seleccionOpciones.js');
const { generarMenu } = require('./flows/common.js');

// Datos de conexión a MongoDB
const MONGO_DB_URI = 'mongodb+srv://nicoandreolligothia:ksLkiCPu4Ln8r3o4@cluster0.a2obp.mongodb.net/';
const MONGO_DB_NAME = 'db_bot';

// Flujo de saludo principal
const flowSaludo = addKeyword(['hola', 'ole', 'alo', 'buen dia', 'buenas tardes', 'buenas noches', 'buenas'])
    .addAnswer('🙌 ¡Hola! Soy Toto. Te doy la bienvenida al Asistente Virtual de GOTHIA. Tené en cuenta que soy un robot, si me escribís cosas muy largas puedo no entender. Por favor, teneme paciencia. Para poder interactuar con nuestros operadores dbeeras responder las distintas opciones. Luego de completar los paso te derivaremos automáticamente a un operador.')
    .addAnswer(generarMenu());

// Inicialización del bot
const main = async () => {
    try {
        const adapterDB = new MongoAdapter({
            dbUri: MONGO_DB_URI,
            dbName: MONGO_DB_NAME,
        });
        const adapterFlow = createFlow([
            flowSaludo, 
            flowSeleccionOpciones, 
            flowFinalizarConversacion,
            flowEstadoEquipo, 
            flowGarantia, 
            flowMediosPago, 
            flowHorarios,
            flowUbicacion, 
            flowDemoras, 
            flowPreciosPiezas, 
            flowRecibirEquipos, 
            flowAccesorios, 
            flowRetiroDomicilio, 
            flowReparacionesServicios
        ]);
        const adapterProvider = createProvider(BaileysProvider);
        await createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        });
        QRPortalWeb();
    } catch (error) {
        console.error('Error al iniciar el bot:', error);
    }
};

main();
