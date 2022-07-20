import { GameDivStyle } from "./styled"
import { Imgs } from "./ClassImgs"

export const GameDiv = () => {
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

    type Props = {
        Img: string,
        Id: Number
    }
    
    const showCard = ({Img, Id}: Props) => {
        let ImgGameDiv = document.querySelector(`#IMG${Id}`) as HTMLImageElement
        let Gamediv = document.querySelector(`#GameDiv${Id}`) as HTMLDivElement

        ImgGameDiv.src = `${Img}`
        ImgGameDiv.style.opacity = '100%'
        Gamediv.style.backgroundColor = 'blue'


    }

    

    return (
        <GameDivStyle>
            {images.map((item, index) => (
                <div className="GameDiv" onClick={() => {showCard(item)}} id={`GameDiv${item.Id}`}>
                    <img key={index} src='images/svgs/b7.svg' alt="" id={'IMG'+item.Id}/>
                </div>
            ))}
        </GameDivStyle>
    ) 
}