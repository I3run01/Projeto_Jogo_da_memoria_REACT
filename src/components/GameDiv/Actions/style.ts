import styled from "styled-components";


export const ActionsDiv = styled.div`
    #MenuDiv {
        display: flex;
        justify-content: space-around;

        h1 {
            font-size: 1em;
            text-align: center;
            font-weight: lighter;
            
        }

        p {
            font-size: 2.5em;
            text-align: center;
            margin: 0;
            font-weight: bold;
        }
    }

    #ButtonDiv {
        display: flex;
        justify-content:center;

        

        #BTN {
            display: flex;
            flex-direction: row;
            margin-top: 30px;
            min-height: 40px;
            text-align: center;
            color: white;
            font-size: 1.4em;
            cursor: pointer;
            border-radius: 20px 20px 20px 20px;

            :hover {
                box-shadow: 2px 2px 10px black;
            }

        }

        #BtnSymbol, #BtnRestart {
            background-color: blue;
            padding: 20px 0 20px 0;
        }

        #BtnSymbol {
            min-width: 20px;
            border-radius: 20px 0 0 20px;
            padding-left: 10px;

        }

        #BtnRestart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 120px;
            border-radius: 0 20px 20px 0;
        }
    }

    @media(min-width: 800px) {
        #MenuDiv {
            flex-direction: column;
            align-items: flex-start;
        }

    }

    @media(min-width: 800px) {
        #ButtonDiv {
            justify-content: flex-start;
        }
    }

`