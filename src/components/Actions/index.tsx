import * as s from "./style"
import { Timer } from "./ClassTimer"
import { useState } from "react"

export const Actions = () => {
    const [clearIntervalParameter, setClearIntervalParameter] = useState(false)

    let time = new Timer()
    let interval  = () => {
        time.MoreTime()
        const paragraph = document.querySelector('#TimesShow') as HTMLParagraphElement
        paragraph.innerHTML = String(`${time.GetMinutes()}:${time.GetSeconds()}`)
    }

    const StartTime = () => {     
        if (clearIntervalParameter == false ) setInterval(interval, 1000)

        else   clearInterval(interval)
           
            setClearIntervalParameter(false)
        }

        }

        else {
            setClearIntervalParameter(true)
            time.setTime(0)
            StartTime()
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