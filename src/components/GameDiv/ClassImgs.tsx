export class Imgs {
    private num: number
    private img: string
    private id: number

    constructor(img: string, id: number) {
        this.img = img
        this.num =  0
        this.id = id
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

    getId = () => {
        return this.id
    }

    setId = (value: number) => {
        this.id = value
    }
}