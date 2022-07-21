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

    const showCard = (img: string, id: number) => {
        let ImgGameDiv = document.querySelector(`#IMG${id}`) as HTMLImageElement
        let Gamediv = document.querySelector(`#GameDiv${id}`) as HTMLDivElement
        ImgGameDiv.src = `${img}`
        
        ImgGameDiv.style.opacity = '100%'
        Gamediv.style.backgroundColor = 'blue'

        let index = images.findIndex(Obj => Obj.Id === id)

    }

    const hideCard = (id: number) => {
        let ImgGameDiv = document.querySelector(`#IMG${id}`) as HTMLImageElement
        let Gamediv = document.querySelector(`#GameDiv${id}`) as HTMLDivElement
        ImgGameDiv.src = 'images/svgs/b7.svg'
        ImgGameDiv.style.opacity = '20%'
        Gamediv.style.backgroundColor = '#a2acad'

        let index = images.findIndex(Obj => Obj.Id === id)
        images[index].setOpenCard = false

    }

    const AlreadyAOpenCard = () => {
        let openCard = {Img: 'null', Id: -1,}
        images.map((item) => {
            if ( item.getOpenCard ) openCard = {Img: item.Img, Id: item.Id}
        }) 
        return openCard
    }

    type GameProps = {
        Img: string,
        Id: number,
        setOpenCard: boolean
    }
    
    const Game = (item: GameProps) => {
        let FirstCard = AlreadyAOpenCard()
        showCard(item.Img, item.Id)
        item.setOpenCard = true
        if (FirstCard.Img != 'null'){

            if(item.Img != FirstCard.Img) {
                hideCard(FirstCard.Id)
                hideCard(item.Id)
            }
        }

    }

    

    return (
        <GameDivStyle>
            {images.map((item, index) => (
                <div className="GameDiv" onClick={() => {Game(item)}} id={`GameDiv${item.Id}`}>
                    <img key={index} src='images/svgs/b7.svg' alt="" id={'IMG'+item.Id}/>
                </div>
            ))}
        </GameDivStyle>
    ) 
}