import { Container, Desktop, Mobile } from "./style";

import Input from "../Input";

import { IoIosMenu } from "react-icons/io";


export default function Header() {
        

    return (
        <Container>

            <Mobile>
                <IoIosMenu />
            </Mobile>


            <Desktop>
                <h1>RocketMovies</h1>

                <Input type="text" placeholder="Pesquisar pelo título"/>


                <div>
                    <span>
                        <h2>Nome</h2>
                        <button>sair</button>
                    </span>

                    <img src="https://github.com/henrique1232H.png" alt="" />
                </div>

            </Desktop>
            




        </Container>
    )
}