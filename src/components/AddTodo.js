import { useContext, useState } from "react"
import styled from "styled-components"
import { nanoid } from "nanoid"
import { ThemeContext } from "../context/ThemeContext"
import checkIcon from '../images/icon-check.svg'
import { darkTheme, lightTheme } from "../theme/theme"


const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
margin-block: 1rem;
border-radius: 0.5rem;
padding: 1.1rem ;
background-color: ${props => props.theme === 'light' ? lightTheme.todoSurface : darkTheme.todoSurface};
`


const Input = styled.input`
width: 100%;
background-color: inherit;
padding-left: 1rem;
color: ${props => props.theme === 'light' ? lightTheme.text : darkTheme.text};
`

export const Checkbox = styled.input`
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
appearance: none;
outline: 0;
border: 1px solid ${props => props.theme === 'light' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 30%)'};
cursor: pointer;
margin-bottom: 0.2rem;
&:checked {
    border: none;
    background: url(${checkIcon}) center center no-repeat, linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) !important;
}
`

const AddTodo = ({ setTodos }) => {
    const id = nanoid(10)
    const [text, setText] = useState('')
    const [completed, setCompleted] = useState(false)
    const { theme } = useContext(ThemeContext)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a todo')
            return
        }
        setTodos(prevTodos => [...prevTodos, { id, text, completed }])
        setCompleted(false)
        setText('')
    }
    return (
        <Form onSubmit={onSubmit} theme={theme}>
            <Checkbox type='checkbox' onChange={() => setCompleted(prevCompleted => !prevCompleted)} checked={completed} />
            <Input
                type='text'
                placeholder='Create a new todo...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                theme={theme}
            />
        </Form>
    )
}

export default AddTodo
