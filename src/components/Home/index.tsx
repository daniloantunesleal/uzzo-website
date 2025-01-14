import { useTranslation } from "react-i18next"
import { Container } from "./styles"

import arrowRightImg from "../../assets/arrowRight.svg"

export const Home = () => {
    const { t } = useTranslation()

    return (
        <Container id="home">
            <h1 dangerouslySetInnerHTML={{ __html: t("home.title") }} />
            <p>{t("home.description")}</p>
            <button>
                {t("home.learnMoreButtonText")}
                <img src={arrowRightImg} alt="arrow right" />
            </button>
        </Container>
    )
}