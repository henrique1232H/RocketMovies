import styled from "styled-components";

export const Container = styled.button`

    width: 100%;
    height: 22.285rem;
    padding: 3.2rem;
    border-radius: 10px;
    margin-top: 1rem;


    background: rgba(255,133,155,0.1);
    border: none;
    display: flex;
    flex-direction: column;
    transition: background 200ms ease-in-out;

    div > svg {
        color:${({theme}) => theme.COLOR.PINK};
    }

    h2 {
        color: ${({theme}) => theme.COLOR.WHITE};
    }

    p {
        color: ${({theme}) => theme.COLOR.GRAY};
    }

    &:hover {
        background: rgba(255,133,155,0.2)
    }

`