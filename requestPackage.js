var request = require('request');
var fs = require('fs');

console.log('Making the request now...');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {   
         throw err; 
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode + ";",
          'Response Status Message: ', response.statusMessage + ";",
          'Response Content-type: ', response.headers['content-type']+ ".");
       })
       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('Downloading image...');