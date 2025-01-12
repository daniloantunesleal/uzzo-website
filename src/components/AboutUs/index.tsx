import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Container } from "./styles";

export const About = () => {
    const { t } = useTranslation()

    return (
        <Container id="about-us">
            <div className="content">
                <h1>{t("aboutUs.title")}</h1>
                <p>{t("aboutUs.description")}</p>
                <a target="__blank" href="https://www.instagram.com/uzzosolutions/">Sobre nós <FaLongArrowAltRight /></a>
            </div>
            {/* Image size: 548 x 515 */}
            <img src="https://cdn.noulsolutions.com/white-rectangle-website-uzzo.png" alt="white rectangle" />
        </Container>
    )
}