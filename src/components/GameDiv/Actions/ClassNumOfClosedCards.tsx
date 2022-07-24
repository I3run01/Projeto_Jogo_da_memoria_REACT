export class NumOfClosedsCards {
    private CardsCloseds
    constructor() {
        this.CardsCloseds = 0
    }

    get numberClosedsCards() {
        return this.CardsCloseds
    }

    set numberClosedsCards(value: number) {
        this.CardsCloseds = value
    }
}