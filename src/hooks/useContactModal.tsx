import { createContext, ReactNode, useContext, useState } from "react";

interface ContactModalContextData {
    isContactModalOpen: boolean,
    setIsContactModalOpen: (isOpen: boolean) => void
}

interface ContactModalProvider {
    children: ReactNode
}

const ContactModalContext = createContext<ContactModalContextData>({} as ContactModalContextData)

export const ContactModalProvider = ({ children }: ContactModalProvider) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <ContactModalContext.Provider value={{ isContactModalOpen, setIsContactModalOpen }}>
            {children}
        </ContactModalContext.Provider>
    )
}

export const useContactModal = () => {
    const context = useContext(ContactModalContext)

    return context
}