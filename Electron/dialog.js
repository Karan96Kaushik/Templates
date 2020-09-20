const {dialog} = require('electron');

let options = { properties: ["openDirectory"] }

dialog.showOpenDialog(options, (dir) => {
    console.log(dir)                        
});


let dialog_options = {message:"Restart not detected, Report Generation Failed"} 

dialog.showMessageBox(dialog_options)