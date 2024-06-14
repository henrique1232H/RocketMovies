/* eslint-disable react/prop-types */
import { SrOnly } from "../../styles/class";
import { Container } from "./style";

export default function Input({type,placeholder,icon: Icon,...rest}) {

    return (
        <Container>

            <SrOnly> {placeholder} </SrOnly>


            {Icon && <Icon size={20}/>}

            <input
            type={type}
            
            placeholder={placeholder} 
            {...rest}
            />
        </Container>
    )
}