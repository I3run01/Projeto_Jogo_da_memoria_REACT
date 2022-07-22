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
                transform: scale(0.9);
            }

            img {
                width: 80%;
                opacity: 20%;
            }
        }

    }
    

`