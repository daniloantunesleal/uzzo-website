import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ptTranslations from "../locales/pt.json"
import enTranslations from "../locales/en.json"
import esTranslations from "../locales/es.json"

const getLanguageByNavigatorLanguage = () => {
    const navigatorLanguage = navigator.language

    const isPortuguese = navigatorLanguage.startsWith("pt")
    const isEnglish = navigatorLanguage.startsWith("en")
    const isSpanish = navigatorLanguage.startsWith("es")

    if (isPortuguese) return "pt"
    if (isEnglish) return "en"
    if (isSpanish) return "es"

    return "en"
}

i18n.use(initReactI18next).init({
    resources: {
        en: { ... enTranslations },
        es: { ...esTranslations },
        pt: { ...ptTranslations }
    },
    lng: getLanguageByNavigatorLanguage(),
    fallbackLng: getLanguageByNavigatorLanguage()
})