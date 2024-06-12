import { Container } from "./style";
import { IoMdArrowBack } from "react-icons/io";

export default function ButtonBack() {


    return (
        <Container>
            <a href="/">
                <IoMdArrowBack />
                Voltar

            </a>
        </Container>
    )
}