
class Player {
    #name;
    #symbol;

    constructor(name, symbol) {
        this.#name = name;
        this.#symbol = symbol;
    }

    getPlayerName() {
        return this.#name;
    }

    getPlayerSymbol() {
        return this.#symbol;
    }

    static newPlayer(name, symbol) {
        try {
            if (typeof name !== "string")
                throw new Error("Invalid player name");
            if (typeof symbol !== "string")
                throw new Error("Invalid symbol");

            return new Player(name, symbol);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Player;
