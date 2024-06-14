import Brand from "../Brand";
import Card from "../Card";
import { Container, Cards } from "./style";



export default function Main() {

    const array = [
        {title: 'alo', text: 'aa', href: '1', star: 4},

        {
            title: 'alo', 
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias impedit dolorum dicta odit ullam laudantium nostrum itaque adipisci laborum ducimus beatae, illum odio. Optio similique iste possimus excepturi esse unde?',
            tags: ["Ação", "Comedia"],
            href: '2',
            star: 3}
    ]

    return (
        <Container>
            <Brand />


            <Cards>
                
                {
                    array.map((entries) => {
                        return <Card key={entries.href} title={entries.title} text={entries.text} href={entries.href} tags={entries.tags} star={entries.star}/>
                    })
                }
                
            </Cards>
        </Container>
    )
}