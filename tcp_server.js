const net = require('net');

var server = net.createServer(function (socket) {
	socket.setEncoding('UTF-8')

    socket.write("Connected")
    
	socket.on('close', function (data) {
		console.log('Connection Closed');
	});

	socket.on('error', function (data) {
		console.log('Connection Error');
    });
    
    socket.on('data', function (data) {
        console.log(data)
    })

})

console.log('Server Started');

server.listen(1337, '0.0.0.0');
