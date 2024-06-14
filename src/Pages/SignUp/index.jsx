import { FiLock, FiMail } from "react-icons/fi";
import Input from "../../components/Input";
import { A, Container, Form } from "./style";
import Button from "../../components/Button";

export default function SignUp() {

    return (
        <Container>
            <div>
                <h1>a</h1>
            </div>

            <div>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>

                    <Form>

                        <h2>Criar sua conta</h2>

                        <div>
                            <Input placeholder="E-mail" icon={FiMail}/>
                            <Input placeholder="Senha" icon={FiLock}/>
                        </div>

                        <div>
                            <Button title="Entrar"/>
                        </div>

                        <A to="/">
                            Entrar na sua conta
                        </A>

                    </Form>
                </div>
            </div>
            

        </Container>
    )
}