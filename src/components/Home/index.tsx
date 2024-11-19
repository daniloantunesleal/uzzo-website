import arrowRightImg from "../../assets/arrowRight.svg"
import { Container } from "./styles"

export const Home = () => {
    return (
        <Container id="home">
            <h1>Impulsionamos <span className="green">Inovações Criativas</span> para resultados Extraordinários</h1>
            <p>Na UZZO Solutions, não apenas criamos soluções digitais - nós criamos experiências que inspiram, engajam e transformam. Nosso foco é entender profundamente o seu negócio e os seus objetivos, desenvolvendo desde o design até o desenvolvimento de soluções personalizadas e impactantes.</p>
            <button>Saiba mais <img src={arrowRightImg} alt="seta direita" /></button>
        </Container>
    )
}