import styled from "styled-components"

export const Container = styled.footer`
    margin: 5rem 0 1rem;
    padding: 0 10rem;
    text-align: start;
    width: 100%;
    
    p {
        opacity: 0.7;
    }

    @media (max-width: 1080px) {
        padding: 0 1rem;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0 1rem;
    border-bottom: 1px solid gray;

    .social {
        a {
            &:first-child {
                margin-left: 1rem;
            }

            margin-left: 5px;

            svg {
                color: var(--light-green);
            }

            font-size: 20px;
        }
    }

    .links {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1rem 3rem;
    }

    .newsletter {
        text-align: center;
        width: 20rem;

        h2 {
            font-size: 0.9rem;
            margin-bottom: 5px;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                width: 100%;
                height: 35px;
                border: none;
                border-radius: 1.2rem 0 0 1.2rem;
                padding-left: 10px;
            }

            button {
                border: 1px solid white;
                color: white;
                padding: 9px 35px;
                background-color: black;
                border-radius: 0 1.2rem 1.2rem 0;
            }
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
        
        .social {
            text-align: center;

            a:first-child {
                margin-left: 0;
            }
        }

        .links {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 2rem 0;
        }
    }
`

export const FooterContact = styled.div`
    text-align: center;
    margin-top: 12px;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
        p {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            margin-left: 15px;

            &:first-child {
                margin-left: 0;
            }
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
`