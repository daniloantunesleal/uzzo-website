import { Container, ContainerProps } from "./styles"

interface ServiceProps {
    icon: string, 
    title: string,
    description: string
}

export const Service = ({ icon, title, description, height, margin, width }: ServiceProps & ContainerProps) => {
    return (
        <Container height={height} margin={margin} width={width}>
            <img src={icon} alt="logo serviço" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Container>
    )
}