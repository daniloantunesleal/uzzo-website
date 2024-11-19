import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ptTranslations from "../locale/pt.json"

i18n.use(initReactI18next).init({
    resources: {
        en: {},
        pt: { ...ptTranslations }
    },
    lng: "pt",
    fallbackLng: "pt"
})