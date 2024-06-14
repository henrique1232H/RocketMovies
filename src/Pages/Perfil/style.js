import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > div:nth-child(1) {
        display: block;
        background: rgba(255,133,155, 0.2);
        width:100%;
        height: 14rem;
        display: flex;
        align-items: center;

        div {
            width: min(169rem, 80%);
            margin: 0 auto;
        }
    }
`

export const Form = styled.form`
    
    width: min(169rem, 80%);
    margin: -50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    > input {
        width: 40rem;
    }
            
    img {
        border-radius: 50%;
        height: 18rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin: 1.2rem 0;

    }


    button {
        width: 40rem;
    }





    > div:nth-child(1) {
        position: relative;
    }

    > div:nth-child(1) div {
        position: absolute;
        background: ${({theme}) => theme.COLOR.PINK};
        border-radius: 50%;
        height: 5rem;
        width: 50px;
        right: 1rem;
        bottom: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        > input {
            display: none;
            visibility: hidden;
        }

        > label {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        > label svg {
            font-size: 2.3rem;
            cursor: pointer;
        }
    }




`

export const Block = styled.div`
    display: flex;
    gap: 0.5rem;

    width: 40rem;

`
