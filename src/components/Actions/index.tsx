import * as s from "./style"
import { useState } from "react";


export const Actions = () => {
    
    const StartTime = () => {
        setTimeout(() => {
            
        }, 1000);
    }

    return (
        <s.ActionsDiv>
            <div id="MenuDiv">
                <div id="Time">
                    <h1>Time</h1>
                    <p>00:00</p>
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