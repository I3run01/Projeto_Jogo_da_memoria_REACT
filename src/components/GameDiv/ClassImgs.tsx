export class Imgs {
    private num: number
    private img: string
    private id: number
    private openCard: boolean
    private cardInTheGame: boolean

    constructor(img: string, id: number) {
        this.img = img
        this.num =  0
        this.id = id
        this.openCard = false
        this.cardInTheGame = true

    }

    get Img() {
        return this.img
    }

    set Img (value: string) {
        this.img = value
    }

    get Num () {
        return this.num
    }

    set Num (value: number) {
        this.num = value
    }

    get Id () {
        return this.id
    }

    set Id (value: number) {
        this.id = value
    }

    get OpenCard () {
        return this.openCard
    }

    set OpenCard(value: boolean) {
        this.openCard = value
    }

    get CardInTheGame () {
        return this.cardInTheGame
    }

    set CardInTheGame (value: boolean) {
        this.cardInTheGame = value
    }
}