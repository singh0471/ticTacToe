const Board = require("../board/board.js");
const Player = require("../player/player.js");
class Game {
    #players;
    #board;
    #turn;
    #isActive;
    #winner;
    #draw;

    constructor(players, board, turn,isActive,winner,draw) {
        this.#players = players;
        this.#board = board;
        this.#turn = turn;
        this.#isActive = isActive;
        this.#winner = winner;
        this.#draw = draw;
    }

    static newGame(player1, player2) {
        try {
            if (typeof player1 !== "string" || typeof player2 !== "string")
                throw new Error("Invalid name!");
            if (player1 === player2)
                throw new Error("Both players have the same name");

            let turn = 0;
            let firstPlayer = Player.newPlayer(player1, 'X');
            let secondPlayer = Player.newPlayer(player2, 'O');
            let players = [firstPlayer, secondPlayer];
            let board = Board.newBoard();
            return new Game(players, board, turn,true,null,false);
        } catch (error) {
            console.log(error);
        }
    }

    play(cellNumber) {
        try {
            if(!this.#isActive){
                if(this.#winner !== null){
                    console.log(`${this.#winner} won the game`);
                }
                console.log(`game was draw`);
                return;
            }
            if (!this.#board.isValidCellNumber(cellNumber))
                throw new Error("Invalid cell number");

            if (!this.#board.isCellEmpty(cellNumber))
                throw new Error("Cell is already occupied");

            let currentPlayer = this.#players[this.#turn % 2];
            this.#board.markCell(cellNumber, currentPlayer.getPlayerSymbol());
            this.#turn++;
            this.#board.displayBoard();

            if (this.#turn >= 5 && this.#board.isWinner()) {
                this.#winner = currentPlayer.getPlayerName();
                console.log(`${currentPlayer.getPlayerName()} is the winner!`);
                return;
            }

            if (this.#turn === 9) {
                this.#draw = true;
                console.log("Game draw");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Game;
