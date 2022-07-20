import * as s from "./style"
import { Timer } from "./ClassTimer"
import { useState } from "react"

export const Actions = () => {
    let time = new Timer()
    
    let interval  = () => {
        if (time.getRestart() == true) {
            time.setTime(Number(0))
            time.setRestart(false)
        }
        time.setTime(time.getTime()+1)
        const paragraph = document.querySelector('#TimesShow') as HTMLParagraphElement
        paragraph.innerHTML = String(`${time.GetMinutes()}:${time.GetSeconds()}`)
    }

    const StartTime = () => {
        time.setRestart(true)
        if (time.getFirstTime()) {
            setInterval(interval, 1000)
            time.setFirstTime(false)
        }
        

    }

    return (
        <s.ActionsDiv>
            <div id="MenuDiv">
                <div id="Time">
                    <h1>Time</h1>
                    <p id="TimesShow">00:00</p>
                </div>
                <div id="Movements">
                    <h1>Movements</h1>
                    <p>0</p>
                </div>
            </div>
            <div id="ButtonDiv" onClick={StartTime}>
                <div id="BTN">
                    <div id="BtnSymbol"></div>
                    <div id="BtnRestart">Restart</div>
                </div>
                
            </div>
        </s.ActionsDiv>
    )
}