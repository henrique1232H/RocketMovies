/* eslint-disable react/prop-types */
import { Container } from "./style";


export default function Button({title, icon: Icon}) {

    return (
        <Container>
            <Icon/>
            {title}
        </Container>
    )
}