import Input from "../../Input";
import { Container } from "./style";


export default function HeaderDesktop() {

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título"/>

            <div>
                <div>
                    <h2>Nome</h2>
                    <button>sair</button>
            </div>
                <img src="https://github.com/henrique1232H.png" alt="" />
            </div>

        </Container>
    )
}