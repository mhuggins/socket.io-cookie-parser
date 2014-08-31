# socket.io-cookie-parser

This package provides a very simple cookie parser middleware for your
[socket.io](http://socket.io/) application.  This makes it easy to share
cookies between socket.io and [express](http://expressjs.com/), for example.

## Installation

Install the package as an application dependency.

    npm install socket.io-cookie-parser --save

## Usage

Inject the middleware into your io stack prior to authorization or request
handling.

    var app = require('express')();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);

    io.use(cookieParser());
    io.use(authorization);

    function authorization(socket, next) {
      // cookies are available in:
      // 1. socket.request.cookies
      // 2. socket.request.signedCookies (if using a secret)
    });

If you need to use a secret or additional parsing options, this middleware acts
as an extremely thin wrapper for express cookie-parser, so pass arguments
through exactly as you would when using that.  For example, using a secret and
custom decoding mechanism could be done with the following:

    io.use(cookieParser('keyboard cat', {
      decode: function (str) {
        return str.replace('-', '_');
      }
    }));

## License

socket.io-cookie-parser is released under the
[MIT License](http://opensource.org/licenses/MIT).
