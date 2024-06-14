import styled from "styled-components";
import Sign from "../../assets/Sign.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`

    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    > div {
        width: 80%;
    }

    > div  > div:nth-child(1) {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 6rem;
        

        > h1 {
            color: ${({theme}) => theme.COLOR.PINK};
            font-size: 48px;
        }
    
        p {
            color: ${({theme}) => theme.COLOR.GRAY_500};
            font-size: 14px;
            margin-bottom: 4.8rem;
        }
    
        h2 {
            font-size: 24px;
            color: #FFF;
            margin-bottom: 4.8rem;
        }
    }

    > div:nth-child(2) {
        width: 100%;
        height: 100vh;
        background-image: url(${Sign});
        background-position: center center;
        background-size: cover;
    } 
    
    @media (max-width:700px) {
        > div:nth-child(2) {
            display: none;
            visibility: hidden;
        }
    }

`

export const Form = styled.form`

    

    > div div {
        width: 100%;
        margin-bottom: 1rem;
    }

    button {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

export const A = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    text-decoration: none;
    color: ${({theme}) =>  theme.COLOR.PINK };
    font-size: 1.3rem;
    width: 100%;
`
