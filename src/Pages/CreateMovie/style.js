import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLOR.BACKGROUND};



    > div h1 {
        color: ${({theme}) => theme.COLOR.WHITE};
        margin: 2.4rem 0 4rem 0;
        font-size: 3rem;
    }

`


export const Form = styled.form`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    height: 60vh;

     > div:nth-child(1) {
        display: flex;
        gap: 2rem;

        > div {
            width: 100%;
        }
     }

     > div:nth-child(5) {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;

        > button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
     }

     textarea {
        margin-top: 4rem;
        padding: 1.6rem 1.9rem;
        background: ${({theme}) => theme.COLOR.BACKGROUND_100};
        border-radius: 1rem;
        border: none;
        width: 100%;
        height: 27.4rem;
        color: #FFF;
        resize: none;
     }
    
     > h2 {
        margin:4rem 0  2.4rem 0;
        color: ${({theme}) => theme.COLOR.GRAY};
        font-size: 2rem;
     }

`

export const DivMarket = styled.div`
    width: 100%;
    background: #0D0C0F;
    height: 8.8rem;
    border-radius: 1rem;
    gap: 2rem;
    padding: 0 3rem;
    display: flex;
    align-items: center;
`