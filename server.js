'use strict';
require('babel-core/register');
let env  = process.env.NODE_ENV || 'development';
let fs   = require('fs');
let path = require('path');
let express = require('express');

fs.stat('.env', (err, stat) => {
  if(err === null) {
    require('dotenv').config({silent: true});
  }
});

const PORT = process.env.PORT || 4001;

let app = express();

if(env === 'development') {
  let webpack = require('webpack');
  let config = require('./webpack.config.dev');
  let compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Allows for the use of other static resources
app.use('/static', express.static('dist/static'));

app.set('view engine', 'ejs');

// Caching timestamp. This will only be updated when the server is restarted. In the future,
// we should make this the greater of the last-modified time of the style sheet or react bundle
// but lazy for now and binding this to when the server is restarted...
const timestamp = Date.now();

// This allows the client side app to check if the app has been updated and it needs to do a hard
// refresh
app.get('/last-updated', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');

  res.json({last_updated: timestamp});
});

app.get('*', (req, res) => {
  // Setting no cache makes sure we always have the latest version of index.ejs that has the updated
  // timestamped versions of the css and js files.
  res.setHeader('Cache-Control', 'no-cache');

  res.render(path.join(__dirname, 'index.ejs'), {
    API_URL: process.env.API_URL || 'http://localhost:8000',
    timestamp: timestamp,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at port ${PORT}`);
});
