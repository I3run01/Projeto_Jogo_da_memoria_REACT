export class Timer {
    private time: number
    private restart: boolean
    private firsttime: boolean
    
    public constructor() {
        this.time = 0
        this.restart = true
        this.firsttime = true
    }

    public getTime() {
        return this.time
    }

    public setTime(value: number) {
        this.time = value
    }

    public getRestart() {
        return this.restart
    }

    public setRestart(value: boolean) {
        this.restart = value
    }

    public getFirstTime() {
        return this.firsttime
    }

    public setFirstTime(value: boolean) {
        this.firsttime = value
    }

    public MoreTime() {
        this.time++
    }

    public GetSeconds() {
        return (this.time % 60 )
    }

    public GetMinutes() {
        return Math.floor(this.time/60)
    }
}