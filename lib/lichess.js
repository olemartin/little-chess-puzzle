var request = require('request');

function fetchPuzzle(callback) {
  request({
    url: "http://en.lichess.org/api/puzzle/daily",
    json: true
  },
  function(error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
}

function sample(callback) {
    request({
            url: "http://en.lichess.org/api/puzzle/23045",
            json: true
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(body);
            }
        });
}

module.exports.fetch = fetchPuzzle;
module.exports.sample = sample;
