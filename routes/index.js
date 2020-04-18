var express = require("express");
var router = express.Router();

//SHOWS LANDING HOME PAGE
router.get("/", function(req, res ){
	res.render("home");
});

router.get("/people", function(req, res ){
	res.render("people");
});

router.get("/resources", function(req, res ){
	res.render("resources");
});

module.exports = router;