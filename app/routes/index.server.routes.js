module.exports = function (app) {
  //load the controller(s)
  var admin = require("../controllers/admin.server.controller");
  var index = require("../controllers/index.server.controller");
  var login = require('../controllers/login.server.controller');
  var logout = require('../controllers/logout.server.controller');
  var display = require('../controllers/display.server.controller');
  var message = require('../controllers/message.server.controller');

  //handle the routing of get and post request
  app.get('/', index.render);
  app.get('/admin', admin.render);
  app.get('/login', index.render);
  app.post('/login', login.render);
  app.get('/display', display.render);
  app.get('/logout', logout.render);
  app.post('/message', message.render);

  app.post('/', function (req, res) {
    //console.log("POST request - User name = " + req.body.username);
    index.render(req, res);
    
});
  //handle the routing of get request to the route
  //by showing the login screen
 /* app.get("/", function (req, res) {
    //display login page
    res.render("index", { loginMessage: "Please login" });
  });
  //the form uses a post request to the same path ('/')
  app.post("/", function (req, res) {
    //use the controller function
    index.displayInfo(req, res);
  });*/
};
