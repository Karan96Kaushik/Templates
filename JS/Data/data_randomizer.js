const csv = require('csv-parser')
const ObjectsToCsv = require('objects-to-csv');
// const csv_string = require("./csv_string")
const fs = require('fs')
const results = [];

var file_name = "./Wind data/21 jun to 30.csv"
var op_name = "./21 Apr to 30.csv"
var month_from = "-06-"
var month_to = "-03-"

var wind_comp = (Math.random()) / 10
var wind_comp_v = (Math.random()) / 10
var wind_comp_w = (Math.random()) / 10
var wind_dir_1 = (Math.random()) * 10
var wind_speed_1 = (Math.random())

var new_csv = [];

const columnDelimiter = ",";
const lineDelimiter = '\n';

var keys;

fs.createReadStream(file_name)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {

        delete results[0]["Sonic Temperature (Avg) �C"]

        keys = Object.keys(results[0])

        var result = ""
        result += keys.join(columnDelimiter)
        result += lineDelimiter

        results.forEach((val, i) => {
            var row = {}

            var field = 'timestamp'
            row[field] = val[field].replace(month_from, month_to)

            result += row[field] + columnDelimiter;

            field = 'Battery Level (Avg) V'
            row[field] = val[field]

            result += row[field] + columnDelimiter;

            field = 'Wind Component U (Avg) m/s'
            row[field] = Math.round(
                (
                    parseFloat(val[field])
                    + Math.random() / 100 + wind_comp
                ) * 100
            ) / 100

            result += row[field] + columnDelimiter;

            field = 'Wind Component V (Avg) m/s'
            row[field] = Math.round(
                (
                    parseFloat(val[field])
                    + Math.random() / 100 + wind_comp_v
                ) * 100
            ) / 100

            result += row[field] + columnDelimiter;

            field = 'Wind Component W (Avg) m/s'
            row[field] = Math.round(
                (
                    parseFloat(val[field])
                    + Math.random() / 100 + wind_comp_w
                ) * 100
            ) / 100

            result += row[field] + columnDelimiter;

            field = 'Wind Direction 1 (Avg) �'
            row[field] = Math.round(
                parseFloat(val[field])
                + Math.random() + wind_dir_1
            )
            if (row[field] > 360) {
                row[field] -= 360
            }

            result += row[field] + columnDelimiter;

            field = 'Wind Direction 2 (Avg) �'
            row[field] = Math.round(
                parseFloat(val[field])
                + Math.random() + wind_dir_1
            )
            if (row[field] > 360) {
                row[field] -= 360
            }

            result += row[field] + columnDelimiter;

            field = 'Wind Speed (Avg) Km/h'
            row[field] = Math.round(
                (
                    parseFloat(val[field])
                    + Math.random() / 10 + wind_speed_1
                ) * 100
            ) / 100

            result += row[field] + columnDelimiter;

            field = 'Wind Speed 1 (Avg) Km/h'
            row[field] = Math.round(
                (
                    parseFloat(val[field])
                    + Math.random() / 10 + wind_speed_1
                ) * 100
            ) / 100

            result += row[field] + columnDelimiter + lineDelimiter;


            new_csv.push(row)
        });

        fs.writeFile(op_name, result, {}, () => { })
    })