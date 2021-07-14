const express = require("express");
const mongoose = require("mongoose");
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.PORT || 8000;


const templatespath = path.join(__dirname, "../templets/views");
const partials_path = path.join(__dirname, "../templets/partails");
app.set('view engine', 'hbs');
app.set('views', templatespath);
hbs.registerPartials(partials_path);

console.log(templatespath);


app.use(express.static(path.join(__dirname, "../public")));


app.get("/", (req, res) => {
    res.render('index');
})
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/weather", (req, res) => {
    res.render('weather');
})
app.get("*", (req, res) => {
    res.send("404 error");
})
app.listen(port, () => {
    console.log("server is listen");
})
console.log(templatespath);

