import { ReactNode } from "react"
import { Container } from "./styles"

interface MainProps {
    children: ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}