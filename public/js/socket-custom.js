var socket = io();
        // on para escuchar sucesos
        socket.on('connect',function (){
            console.log('Conectado al servidor');
        });

        socket.on('disconnect',function (){
            console.log('Perdimos conexion con servidor');
        });

        // emit para enviar informacion
        socket.emit('enviarMensaje',{
            usuario: 'Félix',
            mensajo: 'Hola Gato'
        }, function (resp){
            console.log('Respuesta server: ',resp);
        });

        // escuchar información
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor: ', mensaje);
        })
