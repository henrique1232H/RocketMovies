import styled from "styled-components";

export const Container = styled.div`
    width: min(151rem, 90%);
    margin: 10rem auto;
    height: 51rem;
    overflow-y: scroll;

    h1 {
        margin: 2.4rem 0;
        font-size: 3.6rem;
    }

    p, h1 {
        color: ${({theme}) => theme.COLOR.WHITE};
    } 

    p {
        font-size: 16px;
    }

    > div > p {
        margin-bottom: 4rem;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 2rem;

    }

    .title svg {
        font-size: 2rem;
        color: ${({theme}) => theme.COLOR.PINK};
    }

    

    img {
        width: 3rem;
        border-radius: 20px;
    }

    span {

    }
`

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.4rem;
    font-size: 1.6rem;
`

export const Subtitle = styled.p`
    color: white;

`