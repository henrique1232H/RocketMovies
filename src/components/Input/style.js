import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLOR.BACKGROUND_100};
    height: 5rem;
    padding: 3rem 2rem;
    width: 100%;
    color: ${({theme}) => theme.COLOR.WHITE};
    border: none;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        color: ${({theme}) => theme.COLOR.GRAY};
    }

    > input {
        background: none;
        border: none;
        margin-left: 2rem;
        width: 100%;
    }







    ::placeholder {
        color: ${({theme}) => theme.COLOR.GRAY_100};
    }

`   