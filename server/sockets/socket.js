
const { io } = require('../server');

io.on('connection', ( client ) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', ( data, callback ) => {
        
        console.log( data );

        // Se envia a todos los usuarios conectados
        client.broadcast.emit( 'enviarMensaje', data );
        
        //Para indicar al cliente que hemos recibido el mensaje
        //callback();
        /* if( mensaje.usuario ){
            callback({
                resp: 'TODO SALIO BIEN!!!'
            });
        }else{
            callback({
                resp: 'TODO SALIO MAL!!!'
            });
        } */
    });
});