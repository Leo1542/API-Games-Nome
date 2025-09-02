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

    async Create(title, year, price, descriptions) {
        try {
            const newGame = new Game({
                title,
                year,
                price,
                descriptions
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
    async update(id, title, year, price, descriptions){
        try{
            const game = await Game.findByIdAndUpdate(id,{
                title,
                year,
                price,
                descriptions
            });
        }catch(error){
            console.log(error)
        }
    }

    //Listando registro unico

}

export default new gameService();