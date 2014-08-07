var express = require('express');



var app = express();
app.use(express.static(__dirname));

app.get("/", function(req, res){
	res.redirect("/index.html");
});


app.get("/gallery", function(req, res){
    res.redirect("http://fishinterns.tumblr.com/");
});


app.listen(1234);

console.log("Application is listening on port 8080");