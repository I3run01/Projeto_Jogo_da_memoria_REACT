export class Timer {
    private time: number
    private restart: boolean
    
    public constructor() {
        this.time = 0
        this.restart = true
    }

    public MoreTime() {
        this.time++
    }

    public setTime(value: number) {
        this.time = value
    }

    public getTime() {
        return this.time
    }

    public setRestart(value: boolean) {
        this.restart = value
    }

    public getRestart() {
        return this.restart
    }

    public GetSeconds() {
        return (this.time % 60 )
    }

    public GetMinutes() {
        return Math.floor(this.time/60)
    }
}