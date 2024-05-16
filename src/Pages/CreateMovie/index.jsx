import { Container } from "./style";
import Header from "../../components/Header"
import Line from "../../components/Line"
import { ResponsiveScale } from "../../styles/class";


export default function MoviePreview() {

    return (
        <Container>
            <Header/>
            <Line />
            <ResponsiveScale>
                <h1>as</h1>      
            </ResponsiveScale>
        </Container>
    )
}