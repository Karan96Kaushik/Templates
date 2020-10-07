const mailjet = require("node-mailjet").connect(
    "KEY",
    "SECRET"
  );
  
  var sendEmail = mailjet.post('send');
 
var emailData = {
    'FromEmail': 'service@MY_ADDRESS',
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