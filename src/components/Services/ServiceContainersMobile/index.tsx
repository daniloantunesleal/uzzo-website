import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Container } from "./styles"
import { Service } from '../Service';

import webImg from "../../../assets/web.svg"
import followImg from "../../../assets/follow.svg"
import targetImg from "../../../assets/target.svg"
import shareImg from "../../../assets/share.svg"
import paintImg from "../../../assets/paint.svg"

export const ServiceContainersMobile = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={50}
            >
                <SwiperSlide>
                    <Service 
                        icon={webImg} 
                        title={t("services.websiteCreation.title")}
                        description={t("services.websiteCreation.description")}
                        height="273px"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Service 
                        icon={followImg} 
                        title={t("services.socialMedia.title")}
                        description={t("services.socialMedia.description")}
                        height="273px"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Service 
                        icon={targetImg} 
                        title={t("services.digitalMarketingConsultancy.title")}
                        description={t("services.digitalMarketingConsultancy.description")}
                        height="273px"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Service 
                        icon={shareImg} 
                        title={t("services.socialMediaManagement.title")}
                        description={t("services.socialMediaManagement.description")}
                        height="273px"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Service 
                        icon={paintImg} 
                        title={t("services.visualIdentity.title")}
                        description={t("services.visualIdentity.description")}
                        height="273px"
                    />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}