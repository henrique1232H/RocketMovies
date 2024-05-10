import Input from "../../Input";
import Perfil from "../Perfil";
import { Container } from "./style";


export default function HeaderDesktop() {

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título"/>

            <Perfil />

        </Container>
    )
}