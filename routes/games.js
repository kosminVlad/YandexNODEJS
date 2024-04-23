     const gamesRouter = require("express").Router(); 
     const { sendAllGames, deleteGame, addGameController } = require("../controllers/games");
     const { getAllGames } = require("../middlewares/games");


     gamesRouter.post("/games", getAllGames, addGameController);
     gamesRouter.delete("/games/:id", getAllGames, deleteGame);
     gamesRouter.get("/games", getAllGames, sendAllGames)
     
     module.exports = gamesRouter;
     