var socket = io();

// .on es para escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

//.emmit es para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'José Manuel',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log('Respuesta Server: ',resp);
}); 

// Escuchar informacion
socket.on('enviarMensaje', function( mensaje) {
    console.log('Servidor: ',mensaje);
});