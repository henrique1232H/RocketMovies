import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({theme}) => theme.COLOR.PINK};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;
`