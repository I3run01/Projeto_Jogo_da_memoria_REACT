import { GameDivStyle } from "./styled"
import { images } from "./Cards"
import { Actions } from "./Actions"
import { time } from "./Actions/ActionsOBJ"
import { moviment } from "./Actions/ActionsOBJ"
import * as F from "./Functions"

export const GameDiv = () => {


    type GameProps = {
        Img: string,
        Id: number,
        OpenCard: boolean,
        CardInTheGame: boolean
    }
    
    const Game = (item: GameProps) => {
        if (time.getTime() > 0) {
            moviment.MoreOne()
            let FirstCard = F.AlreadyAOpenCard()
            F.showCard(item.Img, item.Id)
            item.OpenCard = true
            if (FirstCard.Img != 'null'){

                if(item.Img != FirstCard.Img) {
                    setTimeout(() => {F.hideCard(FirstCard.Id)}, 500);
                    setTimeout(() => {F.hideCard(item.Id)}, 500);
                    
                }
                else {
                    F.OutOfGame(FirstCard.Id)
                    F.OutOfGame(item.Id)
                }

            }


        }
        
    }

    return (
        
        <GameDivStyle>
            <Actions
                Reset={F.Reset}/>
            <div id="GameLayout">
                {images.map((item, index) => (
                    <div className="GameDiv" onClick={() => {Game(item)}} id={`GameDiv${item.Id}`}>
                        <img key={index} src='images/svgs/b7.svg' alt="" id={'IMG'+item.Id}/>
                    </div>
                ))}
            </div>
            
        </GameDivStyle>
    ) 
}