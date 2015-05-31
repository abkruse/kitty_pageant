
var express = require ('express');
var app = express();

app.use(express.static('subFolder'));

app.get('/secret', function (req, res) {
  res.send('People who don\'t like cats are evil. Do not trust them.');
})

app.use('/', function (req, res, next) {
  var options = {
    root: __dirname + '/subFolder/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent' : true
    }
  };

  res.sendFile('./404.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', '404.html');
    }
  });
})

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server working!');
});

