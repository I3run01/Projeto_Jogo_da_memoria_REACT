export class Movements {
    private NumMoviments: number
    constructor() {
        this.NumMoviments = 0
    }

    get numMoviments() {
        return this.NumMoviments
    }

    set numMoviments(value: number) {
        this.NumMoviments = value
    }

    MoreOne = () => {
        this.NumMoviments ++
    }

}