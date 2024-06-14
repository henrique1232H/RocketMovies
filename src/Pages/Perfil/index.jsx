import { Container, Form, Block } from "./style";
import ButtonBack from "../../components/ButtonBack"
import Input from "../../components/Input";
import { MdOutlinePhotoCamera } from "react-icons/md";
import {FiUser, FiMail, FiLock} from "react-icons/fi"
import Button from "../../components/Button";



export default function Perfil() {

    return (
        <Container>

            <div>
                <div>
                    <ButtonBack />
                </div>
            </div>

            <Form>
                
                <div>
                    <img src="https://github.com/henrique1232H.png" alt="" />

                    <div>
                        <label htmlFor="image">
                            <MdOutlinePhotoCamera />
                        </label>

            
                        <input type="file" alt="aa" id="image" placeholder="trocar fotos" accept=".png"> 
                        </input>
                    </div>
                </div>

                <Block>
                    <Input placeholder="nome" icon={FiUser}/>
                    <Input placeholder="email" icon={FiMail}/>
                </Block>

                <Block>
                    <Input placeholder="Senha atual" icon={FiLock} />
                    <Input placeholder="Nova senha" icon={FiLock}/>
                </Block>


                <div>
                    <Button title="Salvar" type="submit"/>
                </div>


                 


            </Form>
            
        </Container>
    )
}