import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    svg {
        font-size: 4rem;
        color: ${({theme}) => theme.COLOR.PINK};
    }
`