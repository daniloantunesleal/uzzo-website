import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";

import { Container, Flyer, Flyers, FlyersMobile, Logos } from "./styles";

export const CustomerCompanies = () => {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
    ]

    const flyers = [
        { 
            imgUrl: "https://media.discordapp.net/attachments/1286354855530856493/1306652606403444777/image.png?ex=67377291&is=67362111&hm=074b150035abafd9baa4f3bde6118d92b9d3ba8e2877daf6395f2b5308e05240&=&format=webp&quality=lossless&width=350&height=350",
            link: "#"
        },
        { 
            imgUrl: "https://media.discordapp.net/attachments/1286354855530856493/1306652606403444777/image.png?ex=67377291&is=67362111&hm=074b150035abafd9baa4f3bde6118d92b9d3ba8e2877daf6395f2b5308e05240&=&format=webp&quality=lossless&width=350&height=350",
            link: "#"
        },
        { 
            imgUrl: "https://media.discordapp.net/attachments/1286354855530856493/1306652606403444777/image.png?ex=67377291&is=67362111&hm=074b150035abafd9baa4f3bde6118d92b9d3ba8e2877daf6395f2b5308e05240&=&format=webp&quality=lossless&width=350&height=350",
            link: "#"
        },
        { 
            imgUrl: "https://media.discordapp.net/attachments/1286354855530856493/1306652606403444777/image.png?ex=67377291&is=67362111&hm=074b150035abafd9baa4f3bde6118d92b9d3ba8e2877daf6395f2b5308e05240&=&format=webp&quality=lossless&width=350&height=350",
            link: "#"
        },
        { 
            imgUrl: "https://media.discordapp.net/attachments/1286354855530856493/1306652606403444777/image.png?ex=67377291&is=67362111&hm=074b150035abafd9baa4f3bde6118d92b9d3ba8e2877daf6395f2b5308e05240&=&format=webp&quality=lossless&width=350&height=350",
            link: "#"
        },
        { 
            imgUrl: "https://media.discordapp.net/attachments/1286354855530856493/1306652606403444777/image.png?ex=67377291&is=67362111&hm=074b150035abafd9baa4f3bde6118d92b9d3ba8e2877daf6395f2b5308e05240&=&format=webp&quality=lossless&width=350&height=350",
            link: "#"
        },
    ]

    return (
        <Container id="customer-companies">
            <p>Empresas que escolheram a Uzzo para impulsionar seus negócios</p>
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
                        <a className="overlay-text" href={flyer.link}>Saiba mais <FaLongArrowAltRight /></a>
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
                                <a className="overlay-text" href={flyer.link}>Saiba mais <FaLongArrowAltRight /></a>
                            </Flyer>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FlyersMobile>
        </Container>
    )
}