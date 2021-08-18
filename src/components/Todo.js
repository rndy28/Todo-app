import { useContext } from "react"
import styled, { css } from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import deleteIcon from '../images/icon-cross.svg'
import { darkTheme, lightTheme } from "../theme/theme"
import { Checkbox } from './AddTodo'

const Container = styled.div`
background-color: ${props => props.theme === 'light' ? lightTheme.todoSurface : darkTheme.todoSurface};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
padding: 1.3rem 1.1rem;
&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid ${props => props.theme === 'light' ? lightTheme.border : darkTheme.border};
    width: 100%;
}
`
const Wrapper = styled.span`
flex: 1 1;
min-width: 0;
`

const Text = styled.span`
color: ${props => props.theme === 'light' ? lightTheme.text : darkTheme.text};
padding-inline: 1rem 0.5rem;
display: block;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
text-decoration: ${props => props.completed && 'line-through'};
${({ completed }) => completed && css`
color: ${props => props.theme === "light" ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)"};
transition: all 300ms ease;
`}
`

const DeleteTodo = styled.span`
background: url(${deleteIcon}) no-repeat center;
width: 2rem;
height: 2rem;
max-width: 100%;
@media(min-width: 800px){
    opacity: 0;
transition: opacity 300ms ease-in;
&:hover {
    opacity: 1;
}
} 
`

const Todo = ({ todo, onDelete, onToggle }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Container theme={theme} >
            <Checkbox type='checkbox' onChange={() => onToggle(todo.id)} checked={todo.completed} />
            <Wrapper><Text completed={todo.completed} theme={theme}>{todo.text}</Text></Wrapper>
            <DeleteTodo onClick={() => onDelete(todo.id)} />
        </Container>
    )
}

export default Todo