var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // for parsing multipart/form-data

var api_key = 'key-8b6105e64e6880d83157b707011b4be0';
var domain = 'smeralovci.cz';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/',express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "www.systatika.cz");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/*', function (req, res) {
  res.sendStatus(404);
});

app.post('/api/mail', function(req, res){
    var message = 'Návštěvník stránek se jménem: ' + req.body.name + ' emailem: ' + req.body.email + ' a telefonem: ' + req.body.phone;
    message += ' poslal zprávu: ' + req.body.text;
    //console.log(message);
    var data = {
      from: 'Webová stránka <web@systatika.cz>',
      to: 'info@systatika.cz',
      subject: 'Vyplněný formulář na webu',
      text: message
    };

    mailgun.messages().send(data, function (error, body) {
        //console.log(body);
        res.json({status: 1, message: "Vaše zpráva byla odeslána"})
    });

});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
