import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 20%;
        cursor: pointer;
        display: block;
    }
`

export const LanguageOptions = styled.div`
    position: absolute;
    top: 2.5rem;
    left: -60%;
    background-color: #333;
    border-radius: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`