/* eslint-disable react/prop-types */
import { Container } from "./style";


export default function Button({title, icon: Icon, anchor, href, black,...rest }) {

    return (    
        <Container black={black} {...rest}>
            {
                Icon && <Icon  size="20"/>
            }

            {anchor ?
                <a href={href}>
                    {title}
                </a>

                :

                title
            }

        </Container>
    )
}