import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import { darkTheme, lightTheme } from "../theme/theme"
import Button from "./Button"
import FilterList from "./FilterList"

const Container = styled.div`
display: flex;
justify-content: space-between;
color: hsl(236, 9%, 61%);
position: relative;
padding: 1.1rem ;
font-size: 1rem;
background-color: ${props => props.theme === 'light' ? lightTheme.todoSurface : darkTheme.todoSurface};
`

const Footer = ({ remainingTodos, onClearCompleted, filterNames, setFilter, filter }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Container as='footer' theme={theme} >
            <span>{remainingTodos}</span>
            <FilterList filterNames={filterNames} setFilter={setFilter} filter={filter} />
            <Button onClick={onClearCompleted} theme={theme} text='Clear Completed' />
        </Container>
    )
}

export default Footer
