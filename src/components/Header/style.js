import styled from "styled-components";

export const Container = styled.header`
    width: min(129rem,90%);
    margin: 0 auto;
    padding: 2rem 0;
    gap: 6.4rem;

    
    h1 {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLOR.PINK};
    }
    
    > div:nth-child(1) {
        display: none;
        visibility: hidden;
    }    
    
    @media (max-width: 700px) {


        > div:nth-child(1) {
            display: flex;
            visibility: visible;
        }
        
        
        
        
        > div:nth-child(2) {
            display: none;
            visibility: hidden;
        }
    }
    
    `

export const Desktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 6.4rem;
    
    
    > input {
        flex: 1;
    }

    img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 100%;
        margin-left: 1.4rem;    
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    div span  {
        display: flex;
        flex-direction: column;


    }

    
    
    
    `

export const Mobile = styled.div`
    svg {
        color: #fff;
        font-size: 4rem;
    }
`
