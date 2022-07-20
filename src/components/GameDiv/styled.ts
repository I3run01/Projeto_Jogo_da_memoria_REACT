import styled from "styled-components";

export const GameDivStyle = styled.div`
    margin-top: 3vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;

    .GameDiv {
        background-color: gray;
        padding: 2vw;
        height: 15vw;
        display: flex;
        justify-content: center;
        border-radius: 20px;

        :hover {
            cursor: pointer;
        }

        :active {
            background-color: blue;
        }

        img {
            width: 80%;
        }
    }

`