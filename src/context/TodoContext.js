import { useEffect, useReducer, createContext } from "react";

function init() {
    return JSON.parse(localStorage.getItem('todos')) || []
}

function reducer(todos, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, { id: action.payload.id, text: action.payload.text, completed: action.payload.completed }]
        case 'DELETE_TODO':
            return todos.filter(todo => todo.id !== action.payload)
        case 'TOGGLE_COMPLETED':
            return todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        case 'CLEAR_COMPLETED':
            return todos.filter(todo => todo.completed === false)
        case 'SET_TODO_ORDER':
            return todos = action.payload
        default:
            return todos
    }
}

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}