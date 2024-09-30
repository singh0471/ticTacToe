class Cell {
    #symbol;

    constructor(symbol) {
        this.#symbol = symbol;
    }

    getSymbol() {
        return this.#symbol;
    }

    static newCell() {
        try{
        return new Cell('E');
        }
        catch(error){
            console.log(error);
        }
    }

    isEmpty() {
        return this.#symbol === "E";
    }

    markCell(symbol) {
        this.#symbol = symbol;
    }
}

module.exports = Cell;
