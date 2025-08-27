let express = require('express');
let app = express();

app.get("/", (req, res) => {
    res.send("This is the HomePage fam");
})

app.get("/about", (req, res) => {
    res.send("The server is serving gaddamit "); 
})


































 module.exports = app;
