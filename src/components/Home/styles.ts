import styled from "styled-components";

export const Container = styled.section`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 80rem;

    h1 {
        line-height: 75px;
    }

    p {
        opacity: 0.5;
        max-width: 40rem;
        margin: 1rem auto 1.5rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        
        background-color: rgba(0, 242, 195, 1);
        
        margin: 0 auto;
        padding: 1rem 2.5rem;
        
        border-radius: 0.5rem;
        border: none;

        font-weight: 500;
        font-size: 1.3rem;
    }

    @media (max-width: 700px) {
        h1 {
            line-height: 45px;
        }
    }
`