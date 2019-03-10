// Basice server to pricess to the proper URL

// The goal is to avoid the need to handle CORS during development mode
// by proxying the calls not related to hot module replacement over to the "real" server

// see https://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/
// and https://webpack.js.org/guides/development/ section on webpack-dev-middleware

import path from 'path';
import express from 'express';
import request from 'request';

const app = express()
   DIST_DIR = __dirname,
   HTML_FILE = path.join(DIST_DIR, 'index.html')

// There should be a command line option to set the port!
const apiPort = process.env.API_PORT || 8400
const apiServerHost = "http://127.0.0.1:" + apiPort;

app.use(express.static(DIST_DIR))

app.use('/', function(req, res) {  
    var url = apiServerHost + req.url;
    console.log("seding",url);
  req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
