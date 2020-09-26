const createCsvWriter = require('csv-writer').createObjectCsvWriter;	// CSV Logging
const date_format = require('date-and-time');

var logname = date_format.format(now, 'DD-MM-YYYY[-]HH:mm'); //Name for csv Log File

const csvWriter = createCsvWriter({
	path: path.join(`Log111-${logname}.csv`),
	header: [
		{id: 'time', title: 'Time'},
		{id: 'ist', title: 'IST Cap (pF)'},
		{id: 'ist2', title: 'New IST Cap (pF)'},
		{id: 'ist2h', title: 'New IST Heated Cap (pF)'},
		{id: 'epe', title: 'E+E Cap (pF)'},
		{id: 'hum', title: 'E+E Humidity'},
		{id: 'vaisala', title: 'Vaisala Cap(pF)'}
	]
});

let records = [
    {
        time : date.format(now, 'HH:mm:ss'),
        ist: ch0,
        epe: ch1,
        ist2:ch2,
        ist2h: ch3,
        hum: humid
    }
];

csvWriter.writeRecords(records).then(() => {
    console.log('Done');
});




const csv = require('csv-parser')
const fs = require('fs')

var results = []

fs.createReadStream(file_name)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
        console.log(results);
    })