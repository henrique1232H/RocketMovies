import styled from "styled-components";

export const Container = styled.button`
    background: ${({theme}) => theme.COLOR.PINK};
    border: none;
    padding: 1.8rem 3.2rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 1rem;

    font-weight: 800;

`