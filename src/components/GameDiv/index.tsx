import { GameDivStyle } from "./styled"
import { Imgs } from "./ClassImgs"

export const GameDiv = () => {
    let images = [
        new Imgs('images/svgs/android.svg'),
        new Imgs('images/svgs/disney.svg'),
        new Imgs('images/svgs/caminhao.svg'),
        new Imgs('images/svgs/estrela.svg'),
        new Imgs('images/svgs/gasolina.svg'),
        new Imgs('images/svgs/moto.svg'),
        new Imgs('images/svgs/android.svg'),
        new Imgs('images/svgs/disney.svg'),
        new Imgs('images/svgs/caminhao.svg'),
        new Imgs('images/svgs/estrela.svg'),
        new Imgs('images/svgs/gasolina.svg'),
        new Imgs('images/svgs/moto.svg'),
    ]

    return (
        <GameDivStyle>
            {images.map((item) => (
                <div className="GameDiv" >
                    <img src={item.getImg()} alt="" />
                </div>
            ))}
        </GameDivStyle>
    ) 
}