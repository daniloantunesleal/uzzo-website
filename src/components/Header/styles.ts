import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 3rem;
    right: 0;
    left: 0;
    padding: 0 1rem;
    z-index: 99999;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    position: relative;

    height: 4rem;

    border-radius: 1rem;
    border: 1px solid white;

    max-width: 78rem;
    margin: 0 auto;

    background-image: linear-gradient(to right, var(--light-green), var(--dark-green));
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;

    div.menu {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;

        nav a {
            &:first-child {
                margin-left: 0;
            }

            margin-left: 1rem;
        }
    }
    
    div.contact-and-language {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        button {
            background-color: rgba(0, 242, 195, 1);
            border: none;
            border-radius: 3rem;
            padding: 0.5rem 1.5rem;
        }
    }

    @media (max-width: 700px) {
        nav {
            display: none;
        }
    }
`