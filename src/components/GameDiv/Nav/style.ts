import styled from "styled-components";

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    
    img {
        width: 200px;
        margin: auto;
    }

    @media(min-width: 800px) {

        img {
            margin: 0;
        }

    }
`