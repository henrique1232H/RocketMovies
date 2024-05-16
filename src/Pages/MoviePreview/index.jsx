import ButtonBack from "../../components/ButtonBack";
import { Container, Subtitle, Perfil } from "./style";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function MoviePreview() {
  return (
    <Container>
      <ButtonBack />

      <div className="head">

        <div className="title">
            <h1>Interestellar</h1>

            <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar/>
                <FaRegStar/>
            </span>
        </div>

        <Perfil>
            <img src="https:github.com/henrique1232H.png" alt="" />

            <Subtitle>Por Henrique</Subtitle>

        </Perfil>
      </div>

      <div>
        <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o &lsquo;fantasma &rsquo; é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As &lsquo; missões Lázaro &rsquo; enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
        </p>

        <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o &lsquo;fantasma &rsquo; é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As &lsquo; missões Lázaro &rsquo; enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
        </p>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quisquam eos deleniti error! Eveniet fuga, aliquid nostrum illo accusamus quae! Repudiandae deserunt fuga laudantium animi distinctio molestiae quod earum reiciendis!
        </p>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, autem amet quaerat veniam debitis ipsum porro impedit repellat sunt, quia velit temporibus sed ducimus voluptatum voluptatem culpa quis unde. Ab?
        </p>
        
      </div>
    </Container>
  );
}
