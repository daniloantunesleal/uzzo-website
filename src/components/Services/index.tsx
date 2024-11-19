

import { useTranslation } from "react-i18next"

import { ServiceContainers } from "./ServiceContainers"
import { ServiceContainersMobile } from "./ServiceContainersMobile"

import { Container } from "./styles"

export const Services = () => {
    const { t } = useTranslation()

    return (
        <Container id="services">
            <h1>{t("services.title")}</h1>
            <p>{t("services.description")}</p>

            <ServiceContainers />
            <ServiceContainersMobile />
        </Container>
    )
}