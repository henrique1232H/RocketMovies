import Header from "../../components/Header"
import Main from "../../components/Main"
import { Container } from "./style"


export default function Home() {

    return (
        <Container>
            <Header />

            <div className="line">
                <div></div>
            </div>

            <Main />
        </Container>
    )
}