import { useTranslation } from "react-i18next"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useContactModal } from "../../hooks/useContactModal"
import { Container } from "./styles"

export const AccelerateResults = () => {
    const { setIsContactModalOpen } = useContactModal()
    const { t } = useTranslation()

    const handleButtonClick = () => {
        setIsContactModalOpen(true)
    }

    return (
        <Container id="accelerateResults">
            <h1 dangerouslySetInnerHTML={{ __html: t("accelerateResults.title") }} />
            <button 
                onClick={handleButtonClick}
            >
                {t("accelerateResults.contactButtonText")} <FaLongArrowAltRight />
            </button>
        </Container>
    )
}