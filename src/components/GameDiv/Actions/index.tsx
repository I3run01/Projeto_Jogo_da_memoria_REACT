import * as s from "./style"
import { time } from "./ActionsOBJ"
import { moviment } from './ActionsOBJ'


type Props = {
    Reset: () => void
}
export const Actions = ({Reset}: Props) => {
    
    let interval  = () => {
        if (time.getRestart() == true) {
            time.setTime(Number(-1))
            time.setRestart(false)
        }
        time.setTime(time.getTime()+1)
        const paragraph = document.querySelector('#TimesShow') as HTMLParagraphElement
        const MovementsNum = document.querySelector('#Moveh1') as HTMLElement

        paragraph.innerHTML = String(`${time.GetMinutes()}:${time.GetSeconds()}`)
        MovementsNum.innerHTML = String(`${moviment.numMoviments}`)
    }

    const StartTime = () => {
        moviment.numMoviments = 0
        Reset()
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
                    <p id="Moveh1">{moviment.numMoviments}</p>
                </div>
            </div>
            <div id="ButtonDiv" onClick={StartTime}>
                <div id="BTN">
                    <div id="BtnSymbol">
                        <img src="images/svgs/restart.svg" alt="" />
                    </div>
                    <div id="BtnRestart">Restart</div>
                </div>
            </div>
        </s.ActionsDiv>
    )
}