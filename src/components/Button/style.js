import styled from "styled-components";

export const Container = styled.button`
    background: ${({theme, black}) => black ? theme.COLOR.BLACK : theme.COLOR.PINK};
    border: none;
    padding: 1.8rem 3.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: background 200ms ease-in-out;
    color: ${({theme, black}) => black ? theme.COLOR.PINK : theme.COLOR.BLACK};

    > a {
        text-decoration: none;
        color: ${({theme, black}) => black ? theme.COLOR.PINK : theme.COLOR.BLACK};
    }

    &:hover {
        background: rgba(255,133,155,0.7);
    }

`