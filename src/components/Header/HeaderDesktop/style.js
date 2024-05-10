import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

> h1 {
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLOR.PINK};
}

> input {
    flex: 1;
}

> div {
    display: flex;
    align-items: center;
    

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 100%;
        margin-left: 1.4rem;
    }
    
}

button {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLOR.GRAY};
    cursor: pointer;
}
`