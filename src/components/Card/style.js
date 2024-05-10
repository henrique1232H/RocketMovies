import styled from "styled-components";

export const Container = styled.button`

    border: none;
    width: 100%;
    background: rgba(255,133,155,0.1);
    text-align: left;
    padding: 3.2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background 200ms ease-in-out;
    margin-top: 1rem;

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