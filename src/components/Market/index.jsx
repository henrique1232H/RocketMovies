/* eslint-disable react/prop-types */
import { Container } from "./style";
import {FiPlus, FiX} from "react-icons/fi"

export default function Market({title, isNew}) {

    console.log(isNew)

    return (
        <Container isNew={isNew}>

            
            {title}
            {
                isNew ? <FiX /> : <FiPlus />
            }

        </Container>
    )
}