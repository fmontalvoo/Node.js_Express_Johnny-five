/// Codigo que se ejecuta del lado del servidor.

const servidor = require('express'); // Importa la libreria de Express.
const path = require('path'); // Importa el path para el manejo entre las rutas de la app.
const aplicacion = servidor();

const jf = require("johnny-five"); // Importa la libreria de Johnny-five.
const arduino = new jf.Board(); // Nos da acceso a la placa arduino.

// Permite al index.html usar los estilos alojados en la carpeta css.
aplicacion.use(servidor.static(__dirname + '/css')); 
// Permite al index.html usar el codigo javascript alojado en la carpeta js.  
aplicacion.use(servidor.static(__dirname + '/js'));

/// Define la ruta raiz de nuestra pagina web.
aplicacion.get('/', function(peticion, respuesta){
    // Muestra nuestra pagina web en el navegador.
    respuesta.sendFile(path.join(__dirname + '/views/index.html'));
});

/// Permite al cliente encender el led conectado al arduino.
aplicacion.post('/encender', (peticion, respuesta) => {
    console.log('Encendio el led');
    encenderLed();
});

/// Permite al cliente apagar el led conectado al arduino.
aplicacion.post('/apagar', (peticion, respuesta) => {
    console.log('Apago el led');
    apagarLed();
});

/// Funcion que enciende el led.
function encenderLed(){
    // Variable que permite conocer el pin al que esta conectado el led.
    var led = new jf.Led(7); 
    led.on(); // Metodo que enciende el led conectado al pin 7.
}

/// Funcion que apaga el led.
function apagarLed(){
    // Variable que permite conocer el pin al que esta conectado el led.
    var led = new jf.Led(7);
    led.off(); // Metodo que apaga el led conectado al pin 7.
}

// Puerto por el cual escucha nuestro servidor.
aplicacion.listen(8180);
