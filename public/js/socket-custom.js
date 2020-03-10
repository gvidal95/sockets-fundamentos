var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// on Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Conexion perdida');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

//Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});