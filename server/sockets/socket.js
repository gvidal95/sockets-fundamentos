const { io } = require('../server')
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta APP'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // console.log(message);
        // if (message.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'TODO SALIO MAL'
        //     });
        // }

    });

});