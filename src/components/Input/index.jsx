/* eslint-disable react/prop-types */
import { SrOnly } from "../../styles/class";
import { Container } from "./style";

export default function Input({type,placeholder, ...rest}) {

    return (
        <>
            <SrOnly> {placeholder} </SrOnly>
            <Container 
            type={type} 
            placeholder={placeholder} 
            {...rest}
            />
        </>
    )
}