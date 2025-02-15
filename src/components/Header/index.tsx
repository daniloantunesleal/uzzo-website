import { useContactModal } from "../../hooks/useContactModal"
import { Container, Content } from "./styles"
import { useTranslation } from "react-i18next"
import { LanguageSwitch } from "./LanguageSwitch"

import uzzoWhiteImg from "../../assets/uzzoWhite.svg"

export const Header = () => {
    const { setIsContactModalOpen } = useContactModal()
    const { t } = useTranslation()

    return (
        <Container>
            <Content>
                <div className="menu">
                    <img src={uzzoWhiteImg} alt="Logo Uzzo" />
                    <nav>
                        <a href="#home">{t("header.home")}</a>
                        <a href="#feedbacks">{t("header.feedbacks")}</a>
                        <a href="#services">{t("header.services")}</a>
                        <a href="#about-us">{t("header.aboutUs")}</a>
                    </nav>
                </div>

                <div className="contact-and-language">
                    <button onClick={() => setIsContactModalOpen(true)}>{t("header.contactUs")}</button>
                    <LanguageSwitch />
                </div>

            </Content>
        </Container>
    )
}