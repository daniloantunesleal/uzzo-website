import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";

import { Container, Flyer, Flyers, FlyersMobile, Logos } from "./styles";

export const CustomerCompanies = () => {
    const { t } = useTranslation()

    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
    ]

    /* Flyer image size: 846x846 */
    const flyers = [
        { 
            imgUrl: "https://cdn.noulsolutions.com/flyer-website-uzzo.png",
            link: "#"
        },
        { 
            imgUrl: "https://cdn.noulsolutions.com/flyer-website-uzzo.png",
            link: "#"
        },
        { 
            imgUrl: "https://cdn.noulsolutions.com/flyer-website-uzzo.png",
            link: "#"
        },
        { 
            imgUrl: "https://cdn.noulsolutions.com/flyer-website-uzzo.png",
            link: "#"
        },
        { 
            imgUrl: "https://cdn.noulsolutions.com/flyer-website-uzzo.png",
            link: "#"
        },
        { 
            imgUrl: "https://cdn.noulsolutions.com/flyer-website-uzzo.png",
            link: "#"
        },
    ]

    return (
        <Container id="customer-companies">
            <p>{t("customerCompanies.title")}</p>
            <Logos>
                <div className="logos-slide">
                    {logos.map((logoUrl, index) => (
                        <img key={index} src={logoUrl} alt="logo" />
                    ))}
                </div>
                <div className="logos-slide">
                    {logos.map((logoUrl, index) => (
                        <img key={index} src={logoUrl} alt="logo" />
                    ))}
                </div>
            </Logos>

            <Flyers>
                {flyers.map((flyer, index) => (
                    <Flyer key={index}>
                        <img src={flyer.imgUrl} alt="panfleto" />
                        <a className="overlay-text" href={flyer.link}>{t("customerCompanies.flyers.learnMoreButtonText")} <FaLongArrowAltRight /></a>
                    </Flyer> 
                ))}
            </Flyers>

            <FlyersMobile>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                >
                    {flyers.map((flyer, index) => (
                        <SwiperSlide key={index}>
                            <Flyer key={index}>
                                <img src={flyer.imgUrl} alt="panfleto" />
                                <a className="overlay-text" href={flyer.link}>{t("customerCompanies.flyers.learnMoreButtonText")} <FaLongArrowAltRight /></a>
                            </Flyer>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FlyersMobile>
        </Container>
    )
}