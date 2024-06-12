/* eslint-disable react/prop-types */
import { Container } from "./style";


export default function Button({title, icon: Icon, anchor, href }) {

    return (    
        <Container>
            <Icon/>
            {anchor ?
                <a href={href}>
                    {title}
                </a>

                :
                {title}
            }

        </Container>
    )
}