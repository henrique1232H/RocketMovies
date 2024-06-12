/* eslint-disable react/prop-types */

import { Container } from "./style";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function Card({title, text, href, tags,star}) {

    let value = 0
    let starArray = []


    for(let i = 1; i <= star;i++) {
        starArray = [i, ...starArray];
    }

    console.log(starArray)

    return (
        <Container href={`/moviePreview/${href}`}>
            
            <h2>{title}</h2>

            <div>

                {
                    starArray.map(entries => {
                        return <FaStar key={entries} />
                    })
                }

                    
                
                <FaRegStar />
                <FaRegStar />
            </div>

            <p>{text}</p>

            <div>
                {
                    tags.map(entries => {

                        return <span key={value++}> {entries}</span>
                    })
                }

            </div>
        
        </Container>
    )
}