import Brand from "../Brand";
import Card from "../Card";
import { Container, Cards } from "./style";



export default function Main() {

    return (
        <Container>
            <Brand />

            <Cards>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
                <Card  title="Teste" text="alo"/>
            </Cards>
        </Container>
    )
}