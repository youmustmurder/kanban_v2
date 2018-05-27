const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      consing = require('consign'),
      cors = require('cors'),
      passport = require('passport'),
      passportConfig = require('./passport')(passport),
      jwt = require('jsonwebtoken'),
      config = require('./index.js'),
      database = require('./database')(mongoose, config);

app.use(express.static('.'));
// app.use(bodyParser.urlencoded({ extendend: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.set('kanbansecret', config.secret);

consing()
        .include('KanbanAPI/app/setup')
        .then('KanbanAPI/app/api')
        .then('KanbanAPI/app/routes')
        .into(app);

module.exports = app;
