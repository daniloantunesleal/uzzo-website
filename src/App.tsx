import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Home } from "./components/Home"
import { CustomerCompanies } from "./components/CustomerCompanies"
import { Feedbacks } from "./components/Feedbacks"
import { Footer } from "./components/Footer"
import { Services } from "./components/Services"
import { About } from "./components/About"
import { ContactModalProvider } from "./hooks/useContactModal"
import { ContactModal } from "./components/ContactModal"

import Modal from "react-modal"

//@ts-expect-error Types were not declared
import "swiper/css"
//@ts-expect-error Types were not declared
import "swiper/css/pagination"

Modal.setAppElement("#root")

export const App = () => {
    return (
        <>
            <ContactModalProvider>
                <Header />
                <Main>
                    <Home />
                    <CustomerCompanies />
                    <Feedbacks />
                    <Services />
                    <About />
                    
                    <ContactModal />
                </Main>
                <Footer />
            </ContactModalProvider>
        </>
    )
}