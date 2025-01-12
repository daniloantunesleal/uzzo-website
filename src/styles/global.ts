import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --light-green: rgba(0, 255, 205, 1);
        --dark-green: rgba(0, 78, 65, 1);

        --light-gray: #A4A4A4;
        --dark-gray: #AEAEAE;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: rgba(0, 0, 0, 1);
        color: white;
        overflow-x: hidden;
        text-align: center;
    }

    span {
        &.green {
            color: var(--light-green);
        }
    }

    h1 {
        font-size: 4rem;
        font-weight: 800;
    }

    body, input, textarea, button {
        font-family: "Geist", sans-serif;
    }

    button {
        cursor: pointer;
        transition: filter .5s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: filter .5s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .react-modal-overlay {
        background-color: rgba(48, 48, 48, 0.64);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        z-index: 100000;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        background-color: white;
        position: relative;
        border-radius: 1rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .ReactModal__Body--open {
        overflow: hidden;
    }

    .swiper {
        cursor: pointer;
    }

    @media (max-width: 700px) {
        h1 {
            font-size: 3rem;
        }
    }
`