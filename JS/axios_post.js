var axios = require('axios')
var host = "iot.irasus.com:8080/api/v1"

console.log('Host:')
console.log(`http://${host}`)

async function telemetry(token, data) {
    try {
        var response = await axios.post(`http://${host}/${token}/telemetry`, data)
        return response.status == 200 ? true : false;
    } catch (error) {
        return false;
    }
}

module.exports = telemetry;