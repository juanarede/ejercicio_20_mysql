require('dotenv').config();

const express = require('express');
const mysql = require("mysql2");
const router = express.Router();




router.get("/", function (req, res) {

    const conection = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE
    })
    conection.connect(function(error){
        if(error){
            throw error;
        }else {
            //console.log("conectado a la base de datos")
        }
       })

    conection.query("SELECT * FROM users", function (error, users) {
      if (error) {
        throw error;
      } else {
        res.render("usuarios", { users });
      }
    });
    conection.end();
  });

  router.get("/usuario/crear", function(req,res){
      res.render("crear")
  })










module.exports=router;