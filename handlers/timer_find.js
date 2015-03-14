var ES = require('esta');
var dir    = __dirname.split('/')[__dirname.split('/').length-1];
var file   = dir + __filename.replace(__dirname, '') + " -> ";

module.exports = function(req, reply) {
  var record =  {
    index: "time",
    type: "timer",
    id: req.params.id
  }

  ES.READ(record, function(res) {
    if(res.found) {
      return reply(res);
    }
    else {
      return reply(res).code(404);
    }
  });
}
