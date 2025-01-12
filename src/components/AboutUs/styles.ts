import styled from "styled-components";

export const Container = styled.section`
    margin: 10rem auto 0;
    padding: 0 2rem;

    text-align: start;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    
    max-width: 80rem;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    p {
        opacity: 0.7;
        margin-bottom: 2rem;
    }

    a {
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        max-width: 12rem;
        color: var(--light-green);
        border-radius: 2rem;
        padding: 0.7rem 3rem;
        border: 1px solid var(--light-green);
    }

    img {
        width: 30rem;
    }

    @media (max-width: 850px) {
        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
        }

        img {
            display: none;
        }
    }
`