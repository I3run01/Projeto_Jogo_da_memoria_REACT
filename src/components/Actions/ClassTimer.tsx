export class Timer {
    private time: number
    
    public constructor() {
        this.time = 0
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

    public GetSeconds() {
        return (this.time % 60 )
    }

    public GetMinutes() {
        return Math.floor(this.time/60)
    }
}