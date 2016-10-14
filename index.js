var express = require('express');
var app = express();
var http = require('http').Server(app);

var FB = require('fb');
FB.options({ accessToken: process.env.FB_ACCESS_TOKEN });
var pageId = 1773184412950733;

app.get('/get_count', function (req, res) {

  FB.api(
      "/" + pageId + "/videos",
      {
        pretty: 0,
        limit: 2000
      },
      function (response) {
        if (response && !response.error) {
          res.send("Current pitch count is: " + response.data.length);
        }
      }
  );

});

app.set('port', (process.env.PORT || 5000));
http.listen(app.get('port'), function () {
  console.log('RUNNING.');
});
