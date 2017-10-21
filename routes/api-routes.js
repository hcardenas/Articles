var mongose = require("mongoose");
var db = require("../models");

module.exports = function(app) { 

	app.get("/api/get-all-products", function(req, res) {
    	
      	res.json("true");
    	
  	});


};