const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();



app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb+srv://admin-aman:Apple@6500@cluster0.of18e.mongodb.net/todolistDB", {useUnifiedTopology: true,useNewUrlParser: true,});
mongoose.set('useCreateIndex', true);
