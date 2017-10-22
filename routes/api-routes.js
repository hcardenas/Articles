var mongose = require("mongoose");
var db = require("../models");

module.exports = function(app) {

    app.put("/api/save-article", function(req, res) {
        console.log(` body is: ${req.body.id}`);
        db.Article.update({
            _id: req.body.id
        }, {
            $set: {
                saved: true
            }
        }).then(function(data) {
            res.json(data);

        }).catch(function(err) {
            res.json(err);
        });

    });

    app.put("/api/unsave-article", function(req, res) {
        console.log(` body is: ${req.body.id}`);

        db.Article.update({
            _id: req.body.id
        }, {
            $set: {
                saved: false
            }
        }).then(function(data) {
            res.json(data);

        }).catch(function(err) {
            res.json(err);
        });

    });

    app.get("/api/article-notes", function(req, res) {
        console.log(` body is: ${req.body.id}`);

        db.Article.update({
            _id: req.body.id
        }, {
            $set: {
                saved: false
            }
        }).then(function(data) {
            res.json(data);

        }).catch(function(err) {
            res.json(err);
        });

    });


};