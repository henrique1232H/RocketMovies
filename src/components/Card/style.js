import styled from "styled-components";

export const Container = styled.a`


    width: 100%;
    max-height: 22.285rem;
    padding: 3.2rem;
    border-radius: 10px;
    margin-top: 1rem;
    text-decoration: none;


    background: rgba(255,133,155,0.1);
    border: none;
    display: flex;
    flex-direction: column;
    transition: background 200ms ease-in-out;


    div > svg {
        color:${({theme}) => theme.COLOR.PINK};
        margin-right: 0.4rem;
        font-size: 1%.2;
    }

    h2 {
        color: ${({theme}) => theme.COLOR.WHITE};
        margin-bottom: 0.8rem;
    }

    p {
        text-align: justify;
        color: ${({theme}) => theme.COLOR.GRAY};
        overflow-y: hidden;
        
    }

    &:hover {
        background: rgba(255,133,155,0.2)
    }

    p ~ div {
        margin-top: 2rem;
    }

    span {
        color: ${({theme}) => theme.COLOR.WHITE};
        background: ${({theme}) => theme.COLOR.GRAY_500};
        margin-right: 1rem;
        padding: 0.5rem 1.6rem;
        border-radius: 10px;
    }

`