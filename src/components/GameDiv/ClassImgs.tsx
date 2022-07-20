export class Imgs {
    private num: number
    private img: string

    constructor(img: string) {
        this.img = img
        this.num =  0
    }

    getImg = () => {
        return this.img
    }

    setImg =(value: string) => {
        this.img = value
    }

    getNum = () => {
        return this.num
    }

    setNum = (value: number) => {
        this.num = value
    }
}