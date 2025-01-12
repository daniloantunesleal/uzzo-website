import styled from "styled-components";

export const Container = styled.form`
    color: black;

    h2 {
        font-size: 1.7rem;
        font-weight: 800;
    }

    input, select {
        margin: 0 auto;
        display: block;
        border-radius: 0.5rem;
        width: 100%;
        padding: 10px;
        border: 1px solid var(--light-gray);
    }

    label {
        display: block;
        margin: 15px 0 5px;
    }

    p {
        opacity: 0.7;
        font-size: 0.95rem;
        margin: 15px 0 15px;
    }

    button {
        background-color: rgb(0, 204, 153);
        border: none;
        padding: 15px;
        width: 100%;
        border-radius: 10px;
    }
`