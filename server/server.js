var express=require('express');
var path= require('path');
var bodyParser=require('body-parser');
var index=require('./routes/index');

var app=express();
var port=3001;
app.listen(port, function(){
	console.log("Hello ", port);
});
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile)

app.use("/", index);