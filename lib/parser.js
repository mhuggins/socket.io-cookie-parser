var cookieParser = require('cookie-parser');

module.exports = function () {
  var parser = cookieParser.apply(null, arguments);

  return function (socket, next) {
    parser(socket.request, null, next);
  }
};
