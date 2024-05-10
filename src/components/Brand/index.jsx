import { Container } from "./style";
import Button from "../Button";
import {FiPlus} from "react-icons/fi"

export default function Brand() {

    return(
        <Container>
            <h1>Meus filmes</h1>

            <Button title="Adicionar filme" icon={FiPlus}/>
        </Container>
    )
}