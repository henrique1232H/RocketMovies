import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLOR.BACKGROUND};
    color: ${({theme}) => theme.COLOR.WHITE};

    height: 100vh;

    .line {
        display: flex;
        position: relative;

        div {
            position: absolute;
            background: ${({theme}) => theme.COLOR.GRAY_500};
            width: 100%;
            height: 1px;
        } 

    }

`