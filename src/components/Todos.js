import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import Todo from './Todo'

const Main = styled.main`
border-top-right-radius: 0.5rem;
border-top-left-radius: 0.5rem;
`

const Todos = ({ filterMap, filter, todos, deleteTodo, toggleCompleted }) => {
    return (
        <Main>
            {
                todos.filter(filterMap[filter]).map((todo, index) => {
                    return <Draggable key={todo.id} draggableId={todo.id} index={index}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleCompleted} />
                            </div>
                        )}
                    </Draggable>
                })
            }
        </Main>
    )
}
export default Todos
