import uzzoWhiteImg from "../../assets/uzzoWhite.svg"
import "./styles.scss"

export const Menu = () => {
    return (
        <header>
            <div className="content">
                <img src={uzzoWhiteImg} alt="Logo Uzzo" />
                <ul>
                    <li>Início</li>
                    <li>Feedbacks</li>
                    <li>Serviços</li>
                    <li>Quem somos</li>
                </ul>
            </div>
            
            <button className="fale-conosco">Fale conosco!</button>
        </header>
    )
}