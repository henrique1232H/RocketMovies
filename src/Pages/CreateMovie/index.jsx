import { Container, Form } from "./style";
import Header from "../../components/Header"
import Line from "../../components/Line"
import { ResponsiveScale } from "../../styles/class";
import ButtonBack from "../../components/ButtonBack";
import Input from "../../components/Input"; 

export default function CreateMovie() {

    return (
        <Container>
            <Header/>
            <Line />
            <ResponsiveScale>
                <ButtonBack/>
                <h1>Novo Filme</h1>

                <Form>
                    <div>
                        <Input type="text" placeholder="Título"/>
                        <Input type="number" placeholder="Sua nota (de 0 a 5)" min="0" max="5"/>
                    </div>

                    <div>
                        <textarea 
                            name="textarea" 
                            id="textarea" 
                            cols="30" 
                            rows="10" 
                            placeholder="Observações"
                            wrap="off"
                        ></textarea>
                    </div>

                    <h2>Marcadores</h2>

                    <div>

                    </div>


                    <div>
                        
                    </div>


                </Form>
            </ResponsiveScale>
        </Container>
    )
}