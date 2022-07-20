import * as s from "./style"
import { useState, useEffect } from "react";
import { render } from "react-dom";


export const Actions = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        
    }, [time])

    const StartTime = () => {
        setInterval(()=> {
            setTime(time + 1)
        }, 1000)
    }

    return (
        <s.ActionsDiv>
            <div id="MenuDiv">
                <div id="Time">
                    <h1>Time</h1>
                    <p id="TimesShow">{time}</p>
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