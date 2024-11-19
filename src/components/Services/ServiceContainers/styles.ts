import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: minmax(0, 511px) minmax(0, 664px);
    gap: 14px;

    margin: 5rem auto 0;
    max-width: 85rem;

    .inline {
        display: flex;
        align-items: center;
    }

    @media (max-width: 850px) {
        display: none;
    }
`