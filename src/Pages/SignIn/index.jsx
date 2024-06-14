import { FiLock, FiMail } from "react-icons/fi";
import Input from "../../components/Input";
import { Container, Form, A } from "./style";
import Button from "../../components/Button";


export default function SignIn() {

    return (
        <Container>

            <div>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>

                    <Form>

                        <h2>Faça seu login</h2>

                        <div>
                            <Input placeholder="E-mail" icon={FiMail}/>
                            <Input placeholder="Senha" icon={FiLock}/>
                        </div>

                        <div>
                            <Button title="Entrar"/>
                        </div>

                        <A to="/register">
                            Criar Conta
                        </A>

                    </Form>
                </div>

            </div>

            <div>
                <h1>a</h1>
            </div>
        </Container>
    )
}