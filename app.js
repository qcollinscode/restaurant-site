/************************************
  * VARIABLES
  ************************************/

 var express = require("express"),
     request = require("request"),
     bodyParser = require("body-parser"),
     PORT = process.env.PORT || 3000,
     IP = process.env.IP,
     compression = require('compression'),
     app = express();


/**
 * VIEW ENGINE, DIRECTORIES
 */

/** Static Directory **/
 app.use(bodyParser.urlencoded({extended: true}), express.static("public"));

/** View Engine **/
 app.set("view engine", "ejs");

/** Compression */
app.use(compression())

 /************************************
  * ROUTES
  ************************************/

  /**
   * GET ROUTES
   */

   /** Home **/
   app.get("/", function(req, res) {
     res.render("home");
   });

 /************************************
  * LISTENING PORT SETUP
  ************************************/
 app.listen(PORT, IP, function() {
  console.log("listening on port " + PORT);
});
