var jwt = require('jsonwebtoken');
var token = jwt.sign({ role: 'postgres' }, 'loremipsumdolorsitametloremipsum');

console.log(token)