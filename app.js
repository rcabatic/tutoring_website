//TUTORING WEBSITE APP.JS

var express 	= require("express"),
	  app 		= express(),
	  mongoose 	= require("mongoose"),
	  bodyParser 	= require("body-parser"),
	methodOverride			= require("method-override"),
	  flash		= require("connect-flash");


//====================================

//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
//app.use(flash()); //flash messages.

//Call function on every single route.
app.use(function(req, res, next){
	//res.locals.currentUser = req.user;
	//res.locals.error = req.flash("error");
	//res.locals.success = req.flash("success");
	next(); //very important
});


//=========================ROUTER USE FUNCTION:===========================
//ROUTES HERE..



//==================================== APP listen==============================================
app.listen(process.env.PORT || 3000, function(){
	console.log("TUTORING Website running on 3000");
})
