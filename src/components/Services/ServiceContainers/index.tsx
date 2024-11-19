import { Service } from "../Service"
import { Container } from "./styles"
import { useTranslation } from "react-i18next"

import webImg from "../../../assets/web.svg"
import followImg from "../../../assets/follow.svg"
import targetImg from "../../../assets/target.svg"
import shareImg from "../../../assets/share.svg"
import paintImg from "../../../assets/paint.svg"

export const ServiceContainers = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <div>
                <Service 
                    icon={webImg} 
                    title={t("services.websiteCreation.title")}
                    description={t("services.websiteCreation.description")}
                    height="367px" 
                    margin="0 0 12px"
                />

                <Service 
                    icon={followImg} 
                    title={t("services.socialMedia.title")}
                    description={t("services.socialMedia.description")}
                    height="256px"
                />
            </div>
            <div>
                <div>
                    <Service 
                        icon={targetImg} 
                        title={t("services.digitalMarketingConsultancy.title")}
                        description={t("services.digitalMarketingConsultancy.description")}
                        height="273px"
                        margin="0 0 15px"
                    />
                </div>
                <div className="inline">
                    <Service 
                        icon={shareImg} 
                        title={t("services.socialMediaManagement.title")}
                        description={t("services.socialMediaManagement.description")}
                        height="346px"
                        margin="0 15px 0 0"
                    />

                    <Service 
                        icon={paintImg} 
                        title={t("services.visualIdentity.title")}
                        description={t("services.visualIdentity.description")}
                        height="346px"
                    />
                </div>
            </div>
        </Container>
    )
} 