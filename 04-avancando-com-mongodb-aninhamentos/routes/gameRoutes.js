import express from 'express';
const gamesRoutes = express.Router();
import gameController from "../controllers/gameController.js";


// endpoint listagem
gamesRoutes.get("/games", gameController.getAllGames)

//endpoint cadastro
gamesRoutes.post("/games", gameController.createGame)

//endpoint para deletar
gamesRoutes.delete("/games/:id", gameController.deleteGame)

//endpoint para ALTERAR
gamesRoutes.put("games/:id", gameController.updateGame)

//endpoint para LISTAR UM UNICO JOGO
gamesRoutes.get("/games/:id", gameController.getOneGame)

export default gamesRoutes;