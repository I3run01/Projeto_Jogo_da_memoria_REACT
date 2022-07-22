import styled from "styled-components";

export const GameDivStyle = styled.div`
    
    #GameLayout {
        margin-top: 3vh;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2vw;

        .GameDiv {
            background-color: #f6f6f6;
            padding: 2vw;
            height: 15vw;
            display: flex;
            justify-content: center;
            border-radius: 20px;

            :hover {
                cursor: pointer;
                box-shadow: 1px 1px 5px black
            }

            img {
                width: 80%;
                opacity: 20%;
            }
        }
    }
    
    @media(min-width: 800px) {
        display: grid;
        grid-template-columns: 0.5fr 1fr;


        grid-template-areas:
        "AsideCamp GameLayout"
        "AsideCamp GameLayout"
        ;
        #AsideCamp {
            grid-area: AsideCamp;

            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        #GameLayout {
            grid-template-columns: repeat(4, 1fr);
            grid-area: GameLayout;
            max-height: 40vh;
            grid-gap: 10px;

            .GameDiv {
                max-height: 70px;
            }
        }

        #Nav {
            grid-area: Nav;
        }

        #ActionDiv {
            grid-area: AcionDiv;
        }
    }

`