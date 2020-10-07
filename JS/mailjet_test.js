const mailjet = require("node-mailjet").connect(
    "b251ad7b9604149c215dac117dff9bc3",
    "d4463a80f3be65660476f5829ffb9445"
  );
  
  var sendEmail = mailjet.post('send');
 
var emailData = {
    'FromEmail': 'service@crccanvas.us',
    'FromName': 'My Name',
    'Subject': 'Test with the NodeJS Mailjet wrapper',
    'Text-part': 'Hello NodeJs !',
    'Recipients': [{'Email': 'karankshk96@gmail.com'}],
    'Attachments': [{
      "Content-Type": "text-plain",
      "Filename": "test.txt",
      "Content": "VGhpcyBpcyB5b3VyIGF0dGFjaGVkIGZpbGUhISEK", // Base64 for "This is your attached file!!!"
    }]
}
 
sendEmail
  .request(emailData)
    .then(console.log)
    .catch(console.error);