"use strict";

const config = require('./config.json');

const app = require('./index.js').app;
const passport = require('./index.js').passport;
const Router = require('koa-router');

const routes = new Router();

const main = require('./controllers/main.js');

// routes
let user = null;

routes.get('/', function* (){
  yield this.render('index', {title: config.site.name});
});

routes.get('/part1', function* (){
  yield this.render('part1', {layout: "slides.hbs", title: config.site.name});
});

app.use(routes.middleware());
