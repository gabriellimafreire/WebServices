const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser");
const { ExpressHandlebars } = require("express-handlebars");
app.engine('handlebars', handlebars());
app.set("view engine", "handlebars")
app.use(express.static('public'));


app.listen(8081, function(){
    console.log("Servidor ativo!")
})

app.get('/', function(req, res){
    res.render('home')
})