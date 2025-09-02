import gameService from "../services/gamesServices.js"
import { ObjectId } from "mongodb";
//Listagem
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games });
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor."});
    }
}

//Cadastro
const createGame = async (req, res) => {
    try{
        const {title, year, price, descriptions} = req.body;
        await gameService.Create(title, year, price, descriptions); 
        res.sendStatus(201)
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor."})
    }
}

// Função para DELETAR jogos
const deleteGame = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
        const id = req.params.id
        gameService.Delete(id)
        res.sendStatus(204) // Codigo 204 (NO CONTET) - REQUISIÇÃO BEM SUCEDIDA
        //mas não há conteúdo para retornar.
        } else { // se o ID não for válido
            res.status(400).json({error: 'A ID enviada é invalida'})
        //Código 400 (BAD REQUEST) - Requisição mal formada
        }
        }catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor.'})

        //res.status(500).json({}) -> Para enviar json junto
        //res.sendStatus(500) -> Somentoe codigo de status
    }
}

    //Função para alterar jogos
    const updateGame = async(req,res) => {
        try{
            if (ObjectId.isValid(req.params.id)){
                const id = req.params.id
                const{title,year,price,descriptions} = req.body;
                await gameService.Update(id, title, year, price, descriptions)
                res.status(200).json({game}); // Código 200 (OK)
            } else {
                res.sendStatus(400) // Codigo 400 (BAD REQUEST)
            }
        }catch(error){
            console.log(error);
            res.status(500).json({error: "Erro interno do servidor."})
        }
    }


//função para BUSCAR UM UNICO JOGO
const getOneGame = async(req,res)=> {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const game = await gameService.getOne(id);
            if(!game){
                res.sendStatus(404).json({error: 'O jogo não foi encontrado.'}) // Not found: Não encontrado
            } else {
                res.status(200).json({game})

            }
        } else {
            res.status(400).json({error: 'A Id enviada é invalida'})
            //Bad request: requisição inválida
        }
    } catch(error){
        console.log(error)
        req.sendStatus(500) // erro interno do servidor
    }
}

export default {getAllGames, createGame, deleteGame, updateGame, getOneGame};