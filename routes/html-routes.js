var mongose = require("mongoose");
var db = require("../models");

module.exports = function(app) { 

	app.get("/", function(req, res) {
    	
      	res.render("homePage");
    	
  	});


};