import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { useContactModal } from "../../hooks/useContactModal"
import { Container } from "./styles";
import { FormEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactModal = () => {
    const { t } = useTranslation()
    const { isContactModalOpen, setIsContactModalOpen } = useContactModal()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const inputSelectService = useRef<HTMLSelectElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const email = {
            subject: encodeURIComponent(t("contactModal.email.subject")),
            body: encodeURIComponent(`${t(
                "contactModal.inputName.label"
            )} ${name}\n${t(
                "contactModal.inputPhone.label"
            )} ${phone}\n${t(
                "contactModal.selectService.label"
            )} ${
                inputSelectService.current?.options[inputSelectService.current.selectedIndex].text
            }`)
        }

        location.href = `mailto:info@uzzo.solutions?subject=${email.subject}&body=${email.body}`
        
        setIsContactModalOpen(false)
    }

    return (
        <Modal 
            isOpen={isContactModalOpen}
            onRequestClose={() => setIsContactModalOpen(false)}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={() => setIsContactModalOpen(false)} className="react-modal-close">
                <FaWindowClose color="#ff0000" size="2rem" />
            </button>

            <Container onSubmit={handleSubmit}>
                <h2>{t("contactModal.title")}</h2>

                <label htmlFor="name">{t("contactModal.inputName.label")}</label>
                <input 
                    type="text" 
                    id="name"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    placeholder={t("contactModal.inputName.placeholder")}
                />
                <label htmlFor="phone">{t("contactModal.inputPhone.label")}</label>
                <input 
                    type="tel"
                    id="phone"
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    placeholder={t("contactModal.inputPhone.placeholder")}
                />
                <label htmlFor="service">{t("contactModal.selectService.label")}</label>
                <select ref={inputSelectService} id="service">
                    {(t("contactModal.selectService.options", { returnObjects: true }) as Array<string>).map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
                <p>{t("contactModal.description")}</p>
                <button type="submit">{t("contactModal.submitButton")}</button>
            </Container>
        </Modal>
    )
}