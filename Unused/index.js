var express = require("Express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.redirect("https://www.google.com/search?q="+name)
//    res.send("<h1>Hello " + name +"</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});