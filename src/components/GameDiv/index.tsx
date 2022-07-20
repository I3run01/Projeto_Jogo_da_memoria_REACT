import { GameDivStyle } from "./styled"
import { Imgs } from "./ClassImgs"

export const GameDiv = () => {

    type Props = {
        num: number,
        img: string,
        id:number
    }
    
    const showCard = (obj: object, id: number) => {
        let ImgGameDiv = document.querySelector(`#IMG${id}`) as HTMLImageElement
        console.log(obj)
        ImgGameDiv.src = 'images/svgs/android.svg'

    }

    let images = [
        new Imgs('images/svgs/android.svg', 0),
        new Imgs('images/svgs/disney.svg', 1),
        new Imgs('images/svgs/caminhao.svg', 2),
        new Imgs('images/svgs/estrela.svg', 3),
        new Imgs('images/svgs/gasolina.svg', 4),
        new Imgs('images/svgs/moto.svg', 5),
        new Imgs('images/svgs/android.svg', 6),
        new Imgs('images/svgs/disney.svg', 7),
        new Imgs('images/svgs/caminhao.svg', 8),
        new Imgs('images/svgs/estrela.svg', 9),
        new Imgs('images/svgs/gasolina.svg', 10),
        new Imgs('images/svgs/moto.svg', 11),
    ]

    return (
        <GameDivStyle>
            {images.map((item) => (
                <div className="GameDiv" onClick={() => {showCard(item, item.getId())}} >
                    <img src='images/svgs/b7.svg' alt="" id={'IMG'+item.getId()}/>
                </div>
            ))}
        </GameDivStyle>
    ) 
}