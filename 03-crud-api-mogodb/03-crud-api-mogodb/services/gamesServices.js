import Game from "../models/Games.js"

//services conterá os metodos de manipulação do banco

class gameService{
    //Busca registros no db
    async getAll() {
        try {
            const games = await Game.find()
            return games
        }catch (error){
            console.log(error);
        }
    }

    async Create(title, year, genre, platform, price) {
        try {
            const newGame = new Game({
                title,
                year,
                genre,
                platform,
                price,
            });
            await newGame.save()
        } catch(error){
            console.log(error);
        }

    }
    // Deletando registros no banco
    async Delete(id){
        try{
            await Game.findByIdAndDelete(id);
            console.log(`Game com a id:${id} foi deletado`)
        } catch{error}{
            console.log(error);
        }
    }

    //Alterando registros no banco
    async update(id, title, year, genre, plataform, price){
        try{
            await Game.findByIdAndUpdate(id,{
                title,
                year,
                genre,
                plataform,
                price,
            });
        }catch(error){
            console.log(error)
        }
    }

}

export default new gameService();