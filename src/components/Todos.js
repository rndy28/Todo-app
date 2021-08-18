import Todo from './Todo'

const Todos = ({ filterMap, filter, todos, deleteTodo, toggleCompleted }) => {
    return (
        <main>
            {
                todos.filter(filterMap[filter]).map((todo, index) => {
                    return <Todo key={index} todo={todo} onDelete={deleteTodo} onToggle={toggleCompleted}/>
                })
            }
        </main>
    )
}

export default Todos
