const Cell = require("../cells/cell.js");
class Board {
    #cells;

    constructor(cells) {
        this.#cells = cells;
    }

    static newBoard() {
        try {
            let cells = [];
            for (let i = 0; i < 9; i++) {
                cells.push(Cell.newCell());
            }
            return new Board(cells);
        } catch (error) {
            console.log(error);
        }
    }

    isValidCellNumber(cellNumber) {
        try{
        return typeof cellNumber === "number" && cellNumber >= 0 && cellNumber <= 8;
        }
        catch(error){
            console.log(error);
        }
    }

    isCellEmpty(cellNumber) {
        try{
        return this.#cells[cellNumber].isEmpty();
        }
        catch(error){
            console.log(error);
        }
    }

    markCell(cellNumber, symbol) {
        try{
        this.#cells[cellNumber].markCell(symbol);
        }
        catch(error){
            console.log(error);
        }
    }

    displayBoard(){
        try{
            console.log(`${this.#cells[0].getSymbol()}  |  ${this.#cells[1].getSymbol()}  |  ${this.#cells[2].getSymbol()}`);
            console.log("------------");
            console.log( `${this.#cells[3].getSymbol()}  |  ${this.#cells[4].getSymbol()}  |  ${this.#cells[5].getSymbol()}`);
            console.log("------------");
            console.log( `${this.#cells[6].getSymbol()}  |  ${this.#cells[7].getSymbol()}  |  ${this.#cells[8].getSymbol()}`);
            console.log();
            console.log();

        }
        catch(error){
            console.log(error);
        }
    }

    isWinner() {
        try {
           
            const winPatterns = [
                0, 1, 2,   
                3, 4, 5,   
                6, 7, 8,   
                0, 3, 6, 
                1, 4, 7, 
                2, 5, 8,  
                0, 4, 8, 
                2, 4, 6   
            ];
    
             
            for (let i = 0; i < winPatterns.length; i += 3) {
                const a = winPatterns[i];
                const b = winPatterns[i + 1];
                const c = winPatterns[i + 2];
    
                if (
                    this.#cells[a].getSymbol() !== 'E' &&   
                    this.#cells[a].getSymbol() === this.#cells[b].getSymbol() &&   
                    this.#cells[a].getSymbol() === this.#cells[c].getSymbol()     
                ) {
                    return true;   
                }
            }
            return false;  
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Board;
