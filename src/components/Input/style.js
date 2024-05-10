import styled from "styled-components";

export const Container = styled.input`
    background: ${({theme}) => theme.COLOR.BACKGROUND_100};
    padding: 1.6rem 2.4rem;
    color: ${({theme}) => theme.COLOR.WHITE};
    border: none;
    border-radius: 1rem;

    ::placeholder {
        color: ${({theme}) => theme.COLOR.GRAY_100};
    }

`   