import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Container, FooterContact, FooterLinks } from "./styles"

import uzzoWhiteImg from "../../assets/uzzoWhite.svg"


export const Footer = () => (
    <Container>
        <FooterLinks>
            <div className="social">
                <img src={uzzoWhiteImg} alt="uzzo logo" />
                <div>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaDiscord /></a>
                </div>
            </div>

            <div className="links">
                <a href="">Início</a>
                <a href="">Produtos e serviços</a>
                <a href="">Trabalhos feitos</a>
                <a href="">Quem somos</a>
                <a href="">Contato</a>
            </div>

            <div className="newsletter">
                <h2>SE INSCREVA PARA RECEBER ATUALIZAÇÕES</h2>
                <div>
                    <input type="email" placeholder="Endereço e-mail" />
                    <button>Enviar</button>
                </div>
            </div>
        </FooterLinks>

        <FooterContact>
            <div>
                <p>
                    <MdEmail />
                    info@uzzo.solutions
                </p>
                <p>
                    <BsFillTelephoneFill />
                    (64) 98171-8495
                </p>
            </div>

            <p>Uzzo Solutions - {new Date().getFullYear()}</p>
        </FooterContact>

        <p 
            style={{ textAlign: "center", marginTop: "1rem" }}>
            Site feito por
            <a 
                style={{ textDecoration: "underline" }} href="https://daniloleal.com">
                Danilo Leal
            </a>
        </p>
    </Container>
)