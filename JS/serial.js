const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600,
	parity: "none"
});

const parser = port.pipe(new Readline({ delimiter: '\n' }));

parser.on('data', data =>{
    console.log(data)
});