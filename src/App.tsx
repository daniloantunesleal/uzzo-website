import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Home } from "./components/Home"
import { CustomerCompanies } from "./components/CustomerCompanies"
import { Feedbacks } from "./components/Feedbacks"
import { Footer } from "./components/Footer"
import { Services } from "./components/Services"
import { About } from "./components/AboutUs"
import { ContactModalProvider } from "./hooks/useContactModal"
import { ContactModal } from "./components/ContactModal"
import { AccelerateResults } from "./components/AccelerateResults"

//@ts-expect-error Types were not declared
import "swiper/css"
//@ts-expect-error Types were not declared
import "swiper/css/pagination"

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
                    <AccelerateResults />
                    
                    <ContactModal />
                </Main>
                <Footer />
            </ContactModalProvider>
        </>
    )
}