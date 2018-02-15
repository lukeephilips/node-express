var https = require('https');
var xml2js = require('xml2js');
var colors = require('colors');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = () => {
  var getBookById = (id, cb) => {
    console.log(colors.red(id));
    var options = {
      host: 'www.goodreads.com',
      path: `/book/show/${id}?format=xml&key=g9OLFviDCZhgchRK9fg`
    };
    var callback = (response) => {
      var str = '';
      response.on('data', (chunk) => {
        str += chunk;
      });
      response.on('end', () => {
        parser.parseString(str, (err, result) => {
          cb(null, {
            description: result.GoodreadsResponse.book.description
          });
        });
      });
    };

    https.get(options, callback).end();
  };
  var getBookByTitle = (title, cb) => {
    var options = {
      host: 'www.goodreads.com',
      path: `/book/title.xml?title=${title.replace(/\s/g, '+')}&key=g9OLFviDCZhgchRK9fg`
    };
    var callback = (response) => {
      var str = '';
      response.on('data', (chunk) => {
        str += chunk;
      });
      response.on('end', () => {
        parser.parseString(str, (err, result) => {
          cb(null, {
            goodreads_id: result.GoodreadsResponse.book.id,
            image_url: result.GoodreadsResponse.book.image_url
          });
        });
      });
    };

    https.get(options, callback).end();
  };

  var ping = () => {
    return 'pong';
  };
  return {
    ping,
    getBookById,
    getBookByTitle
  };
};

module.exports = goodreadsService;
