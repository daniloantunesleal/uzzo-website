import { useState, MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import { Container, LanguageOptions } from "./styles"

import brazilFlagImg from "../../../assets/brazilFlag.png"
import spainFlagImg from "../../../assets/spainFlag.png"
import usaFlagImg from "../../../assets/usaFlag.png"

export const LanguageSwitch = () => {
    const { i18n: { changeLanguage, language } } = useTranslation()
    const [isOpenLanguageOptions, setIsOpenLanguageOptions] = useState(false)

    const languages = [
        {
            image: brazilFlagImg,
            key: "pt"
        },
        {
            image: usaFlagImg,
            key: "en"
        },
        {
            image: spainFlagImg,
            key: "es"
        },
    ]

    const handleChangeLanguage = (e: MouseEvent<HTMLImageElement>) => {
        const languageOption = e.currentTarget
        const languageKey = languageOption.getAttribute("data-lang") || "en"

        changeLanguage(languageKey)
        setIsOpenLanguageOptions(false)
    }

    return (
        <Container>
            <img 
                className="selected" 
                onClick={() => setIsOpenLanguageOptions(isOpen => !isOpen)} 
                src={
                    languages.find(
                        languageAttributes => languageAttributes.key === language
                    )?.image || usaFlagImg
                } 
                alt="language flag" 
            />

            {isOpenLanguageOptions && (
                <LanguageOptions>
                    {languages.map((languageAttributes, index) => {
                        if (languageAttributes.key !== language) {
                            return (
                                <img 
                                    key={index} 
                                    onClick={handleChangeLanguage} 
                                    data-lang={languageAttributes.key} 
                                    src={languageAttributes.image} 
                                    alt="language flag" 
                                />
                            )
                        }
                    })}
                </LanguageOptions>
            )}
        </Container>
    )
}