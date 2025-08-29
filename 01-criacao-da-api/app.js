import express from "express";
const app = express();

//Configurações do express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//criando o retorno da API
app.get("/", (req,res) =>{
    const games = [
    {
        title: "Delta",
        year: 2024,
        genre: "FDS",
        plataform: "PC (Windows)",
        price: 0,
    },
    {
        title: "Diablo 3",
        year: 2012,
        genre: "RPG",
        plataform: "PC (Windows)",
        price: 150,
    },
    {
        title: "League of Legends",
        year: 2009,
        genre: "MOBA",
        plataform: "PC (Windows)",
        price: 0,
    }
];
    res.json(games);
})
//rodando a API na porta 4000
const port = 4000;
app.listen(port,(error)=>{
    if (error){
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}.`);
})