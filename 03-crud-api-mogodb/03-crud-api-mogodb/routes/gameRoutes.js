import express from 'express';
const gamesRoutes = express.Router();
import gameController from "../controllers/gameController.js";


// endpoint listagem
gamesRoutes.get("/games", gameController.getAllGames)

//endpoint cadastro
gamesRoutes.post("/games", gameController.createGame)

//endpoint para deletar
gamesRoutes.delete("/games/:id", gameController.deleteGame)

//endepoint para ALTERAR
gamesRoutes.put("games/:id", gameController.updateGame)

export default gamesRoutes;
