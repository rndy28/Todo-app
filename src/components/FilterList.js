import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import { darkTheme, lightTheme } from "../theme/theme"
import Button from "./Button"

const Container = styled.div`
display: flex;
justify-content: center;
gap: 0.8rem;
position: absolute;
width: 100%;
left: 0;
top: 5rem;
box-shadow: ${props => props.theme === 'light' && 'rgba(194, 195, 214, 0.5) 0px 25px 35px -17px'};
background-color: ${props => props.theme === 'light' ? lightTheme.todoSurface : darkTheme.todoSurface};
padding: 1.1rem;
border-radius: 0.5rem;
a {
    font-weight: 700;
}
&::after {
    content: 'Drag and drop to reorder list';
    position: absolute;
    top: 5rem;
    width: 15rem;
    text-align: center;
}
@media(min-width: 800px){
border-radius: 0;
position: relative;
top: 0;
left: 0;
width: auto;
padding: 0;
box-shadow: none;
background-color: unset;
}
`

const FilterList = ({ filterNames, setFilter, filter }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Container theme={theme}>
            {filterNames.map(name => {
                return <Button key={name} theme={theme} text={name}
                    onClick={() => setFilter(name)} isPressed={name === filter} />
            })}
        </Container>
    )
}

export default FilterList
