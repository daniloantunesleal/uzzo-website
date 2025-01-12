// import { MouseEvent } from "react"
// import { useTranslation } from "react-i18next"
// import { Container, LanguageOption } from "./styles"

// import brazilFlagImg from "../../../assets/brazilFlag.png"
// import spainFlagImg from "../../../assets/spainFlag.png"
// import usaFlagImg from "../../../assets/usaFlag.png"

// export const LanguageSwitch = () => {
//     const { i18n: { changeLanguage } } = useTranslation()

//     const languages = [
//         {   
//             name: "Português",
//             image: brazilFlagImg,
//             key: "pt"
//         },
//         {   
//             name: "English",
//             image: usaFlagImg,
//             key: "en"
//         },
//         {   
//             name: "Español",
//             image: spainFlagImg,
//             key: "es"
//         },
//     ]

//     const handleChangeLanguage = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
//         const languageOption = e.target as HTMLDivElement
//         const languageKey = languageOption.getAttribute("data-lang")

//         if (!languageKey) {
//             return console.error("Unable to identify the language to be changed")
//         }

//         changeLanguage(languageKey)
//     }

//     return (
//         <Container className="language-switch">
//             {/* {languages.map((language, index) => (
//                 <LanguageOption key={index} data-lang={language.key} onClick={handleChangeLanguage}>
//                     <img src={language.image} alt="foto lingua" />
//                     <p>{language.name}</p>
//                 </LanguageOption>
//             ))} */}
//         </Container>
//     )
// }