import express from "express";
import mongoose from "mongoose";
const app = express();

import Game from "./models/Games.js";

import gamesRoutes from "./routes/gameRoutes.js";


//config do express 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', gamesRoutes);

//Iniciando conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");


//rodando api
const port = 4000;
app.listen(port,(error) =>{
    if(error){
        console.log(error);
    }
    console.log(`API rodando em https://localhost:${port}.`);
});