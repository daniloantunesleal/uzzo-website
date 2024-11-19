import { FaLongArrowAltRight } from "react-icons/fa";
import { Container } from "./styles";

export const About = () => (
    <Container id="about-us">
        <div className="content">
            <h1>Quem somos?</h1>
            <p>Na UZZO, somos uma equipe especializada e dedicada a transformar ideias em soluções completas e impactantes. Contamos com profissionais experientes em design, social media, desenvolvimento, edição de vídeo e tráfego pago, oferecendo uma abordagem integrada para fortalecer a identidade e a presença das marcas no mercado. Nosso compromisso vai além da entrega de serviços: trabalhamos como parceiros estratégicos, unindo criatividade e técnica para alcançar resultados consistentes e memoráveis.</p>
            <a href="">Sobre nós <FaLongArrowAltRight /></a>
        </div>
        <div className="image">
            <img src="https://cdn.discordapp.com/attachments/1286354855530856493/1307154746221662269/Rectangle_12.png?ex=67394639&is=6737f4b9&hm=ad77df43b2e7829243db88dacfb14511777ee9d8ea26e475485a379ddc5752e0&" alt="" />
        </div>
    </Container>
)