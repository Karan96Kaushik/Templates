var fs = require("fs");

fs.writeFile('readme.txt', "SOME STRING", function(err) {
   if(err) return console.error(err);
});
