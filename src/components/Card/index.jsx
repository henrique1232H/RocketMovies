/* eslint-disable react/prop-types */

import { Container } from "./style";


export default function Card({title, text}) {

    return (
        <Container>
            <h2>{title}</h2>
            <p>{text}</p>
        
        </Container>
    )
}