import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    position: relative;

        div {
            position: absolute;
            background: ${({theme}) => theme.COLOR.GRAY_500};
            width: 100%;
            height: 1px;
        } 

    
`