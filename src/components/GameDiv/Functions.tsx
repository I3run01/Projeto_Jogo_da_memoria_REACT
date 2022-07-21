import { images } from "./Cards"

export const showCard = (img: string, id: number) => {
    let ImgGameDiv = document.querySelector(`#IMG${id}`) as HTMLImageElement
    let Gamediv = document.querySelector(`#GameDiv${id}`) as HTMLDivElement
    ImgGameDiv.src = `${img}`
    
    ImgGameDiv.style.opacity = '100%'
    Gamediv.style.backgroundColor = 'blue'

}

export const hideCard = (id: number) => {
    let ImgGameDiv = document.querySelector(`#IMG${id}`) as HTMLImageElement
    let Gamediv = document.querySelector(`#GameDiv${id}`) as HTMLDivElement
    ImgGameDiv.src = 'images/svgs/b7.svg'
    ImgGameDiv.style.opacity = '20%'
    Gamediv.style.backgroundColor = '#a2acad'

    let index = images.findIndex(Obj => Obj.Id === id)
    images[index].OpenCard = false

    return 'hide'

}

export const AlreadyAOpenCard = () => {
    let openCard = {Img: 'null', Id: -1, CardInTheGame: true}
    images.map((item) => {
        if ( item.OpenCard && item.CardInTheGame ) {
            openCard = {
                Img: item.Img, 
                Id: item.Id,
                CardInTheGame: item.CardInTheGame
            }
        }
    }) 
    return openCard
}

export const OutOfGame = (id: number) => {
    let index = images.findIndex(Obj => Obj.Id === id)
    images[index].CardInTheGame = false
}