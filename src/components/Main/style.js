import styled from "styled-components";

export const Container = styled.main`
    width: min(129rem, 90%);
    margin: 2rem auto 0 auto;

    h1 {
        font-size: 3.2rem;
    }
    
`

export const Cards = styled.div`
    margin-top: 2rem;
    height: 50rem;
    overflow-y: scroll;
    scrollbar-color: ${({theme}) => theme.COLOR.PINK};

    > div {
        margin-top: 1rem;
    }

    ::-webkit-scrollbar-track {
        background: ${({theme}) => theme.COLOR.PINK};
    }
`