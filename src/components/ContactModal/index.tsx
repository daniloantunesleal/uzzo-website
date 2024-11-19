import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { useContactModal } from "../../hooks/useContactModal"
import { Container } from "./styles";
import { FormEvent, useState } from "react";

export const ContactModal = () => {
    const { isContactModalOpen, setIsContactModalOpen } = useContactModal()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const email = {
            subject: encodeURIComponent("Contato Uzzo Solutions"),
            body: encodeURIComponent(`Nome: ${name}\nTelefone: ${phone}\nServiço desejado: teste`)
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
                <h2>Em desenvolvimento</h2>

                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Digite seu nome"
                />
                <input 
                    type="tel" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    placeholder="Digite seu telefone"
                />
                <select>
                    <option selected>Valor 1</option>
                    <option>Valor 2</option>
                    <option>Valor 3</option>
                </select>
                <p>Ao enviar, você será redirecionado para seu aplicativo de e-mail.</p>
                <button type="submit">Enviar</button>
            </Container>
        </Modal>
    )
}