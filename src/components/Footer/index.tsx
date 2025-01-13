import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import { Container, FooterContact, FooterLinks } from "./styles"

import uzzoWhiteImg from "../../assets/uzzoWhite.svg"

export const Footer = () => {
    const { t } = useTranslation()

    return (
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
                    <a href="">{t("footer.links.home")}</a>
                    <a href="">{t("footer.links.services")}</a>
                    <a href="">{t("footer.links.portfolio")}</a>
                    <a href="">{t("footer.links.aboutUs")}</a>
                    <a href="">{t("footer.links.contact")}</a>
                </div>
    
                <div className="newsletter">
                    <h2>{t("footer.newsletter.title")}</h2>
                    <div>
                        <input type="email" placeholder={t("footer.newsletter.placeholder")} />
                        <button>{t("footer.newsletter.sendButtonText")}</button>
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
                {t("footer.by")} ‎
                <a 
                    style={{ textDecoration: "underline" }} href="https://daniloleal.com">
                    Danilo Leal
                </a>
            </p>
        </Container>
    ) 
}