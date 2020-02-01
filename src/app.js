const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes  = require('./api');
const database = require('./config/database');
const defaultPath = path.join(__dirname, "/public");
const cors = require('cors');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(defaultPath));

// routes
app.get("/", (req, res) => {
  console.log("defaultPath ", defaultPath);
  res.send('Working');
  // res.render(`${defaultPath}/index.html`);
});

// use Routes
app.use('/api', routes.woltApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
if (database) {
  console.log('connected to json database');
}

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    success: false,
    payload: null,
    message: `WOLT API says ${error.message}`,
  });
  next();
});

const hostname = "127.0.0.1"; // "localhost";
const port = process.env.PORT || 3000;
// listen for requests
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
