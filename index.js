
const express = require('express');
const app = express();
const router = require("./routes/routes");


app.set("view engine", "ejs");
app.use("/usuarios", router);




app.listen (3000, function(req,res){
    console.log("http://localhost:3000")
})