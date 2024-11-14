import { ReactNode } from "react"
import "./styles.scss"

interface MainProps {
    children: ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <main>
            {children}
        </main>
    )
}