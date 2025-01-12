import styled from "styled-components"

export const Container = styled.section`
    margin-top: 5rem;
    text-align: center;
    padding: 0 2rem;

    p {
        opacity: 0.7;
    }

    .feedbacks {
        margin-top: 2rem;
    }

    .feedback-swiper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Feedback = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 500px;
    min-height: 337px;
    padding: 2rem;
    
    background-image: linear-gradient(to right, var(--light-green), var(--dark-green));
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    filter: brightness(0.8);

    border-radius: 2rem;
    border: 1px solid var(--light-green);

    img {
        width: 95px;
        margin-bottom: 18px;
        border-radius: 50%;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 28px;
    }
    
    p {
        opacity: 1;
    }
`