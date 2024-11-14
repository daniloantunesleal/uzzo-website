import arrowRightImg from "../../assets/arrowRight.svg"
import "./styles.scss"

export const Home = () => {
    return (
        <div className="home" id="home">
            <h1>Texto texto texto texto <span className="green">texto texto texto</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <button>Saiba mais <img src={arrowRightImg} alt="seta direita" /></button>
        </div>
    )
}