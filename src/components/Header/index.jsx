import { Container } from "./style";
import HeaderMobile from "./HeaderMobile"
import HeaderDesktop from "./HeaderDesktop";


export default function Header() {
    
    return (
        <Container>
            {
                window.innerWidth < 700 ? 
                    <HeaderMobile />
                 : <HeaderDesktop/>
            }
        </Container>
    )
}