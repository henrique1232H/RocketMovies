import styled from "styled-components";


export const Container = styled.div`
    height: 5.6rem;
    width: 11.3rem;
    border-radius: 1rem;
    cursor: pointer;

    background: ${({theme, isNew}) => isNew ? theme.COLOR.GRAY_500 : "none"};
    border: ${({theme, isNew}) => isNew ? "none" : `1px dashed ${theme.COLOR.GRAY_500}`};
    color: ${({theme}) => theme.COLOR.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > svg {
        color: ${({theme}) => theme.COLOR.PINK};
        font-size: 2.2rem;
    }

`