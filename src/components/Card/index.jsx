/* eslint-disable react/prop-types */

import { Container } from "./style";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function Card({title, text}) {

    return (
        <Container>
            <h2>{title}</h2>

            <div>
                <FaRegStar />
                <FaStar />
                <FaRegStar />
                <FaStar />
                <FaRegStar />
            </div>

            <p>{text}</p>

            <div>

            </div>
        
        </Container>
    )
}