const express  = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectToDB  = require("./db/db")
dotenv.config()


connectToDB();
app.use(cors());

app.get('/',function(req,res){
res.send('hello world')
})

module.exports = app;