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
            border-radius: 20px 0 0 20px;

        }

        #BtnSymbol, #BtnRestart {
            background-color: blue;
            padding: 20px 0 20px 0;
        }

        #BtnSymbol {
            min-width: 20px;
            border-radius: 20px 0 0 20px;;
        }

        #BtnRestart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 120px;
            border-radius: 0 20px 20px 0;
        }
    }

`