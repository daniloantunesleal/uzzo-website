import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./App"
import { GlobalStyle } from './styles/global'

import "./lib/i18n"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
      <GlobalStyle />
    </StrictMode>,
)

console.warn("Projeto desenvolvido por Danilo Leal para fins acadêmicos e demonstração de conhecimentos, com autorização da UZZO Solutions. ❤️")