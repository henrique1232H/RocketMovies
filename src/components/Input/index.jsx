/* eslint-disable react/prop-types */
import { Container } from "./style";

export default function Input({type,placeholder}) {

    return (
        <Container type={type} placeholder={placeholder}/>
    )
}