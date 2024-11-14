import { Menu } from "./components/Menu"
import { Main } from "./components/Main"
import { Home } from "./components/Home"

export const App = () => {
    return (
        <>
            <Menu />
            <Main>
                <Home />
            </Main>
        </>
    )
}