import styled from "styled-components"

export interface ContainerProps {
    height?: string, 
    width?: string, 
    margin?: string
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid white;
    border-radius: 2rem;
    padding: 2rem;
    text-align: start;

    height: ${props => props.height ? props.height : ""};
    width: ${props => props.width ? props.width : "100%"};
    margin: ${props => props.margin ? props.margin : ""};

    img {
        max-width: 30px;
    }

    h2 {
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`