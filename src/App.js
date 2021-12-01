import { useContext, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import AddTodo from './components/AddTodo';
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import Todos from "./components/Todos";
import { ThemeContext } from "./context/ThemeContext";
import { TodoContext } from './context/TodoContext';
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./theme/theme";

const Container = styled.div`
width: 90%;
max-width: 35rem;
margin: 0 auto;
position: relative;
bottom: 13rem;
`
const Wrapper = styled.div`
box-shadow: ${props => props.theme === 'light' && 'rgba(194, 195, 214, 0.5) 0px 35px 50px -15px'};
border-radius: 0.5rem;
background-color: ${props => props.theme === 'light' ? lightTheme.todoSurface : darkTheme.todoSurface};
`

const Banner = styled.div`
transition: background 200ms ease;
background: url(${props => props.theme === 'light' ? lightTheme.mobileBanner : darkTheme.mobileBanner}) center no-repeat;
background-size: cover;
object-fit: cover;
max-width: 100%;
min-height: 15rem;
@media(min-width: 800px){
  background-image: url(${props => props.theme === 'light' ? lightTheme.banner : darkTheme.banner});
  min-height: 20rem;
}
`
const filterMap = {
  All: () => true,
  Active: todo => !todo.completed,
  Completed: todo => todo.completed
};
const filterNames = Object.keys(filterMap)

const App = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const { theme, switchTheme } = useContext(ThemeContext)
  const [filter, setFilter] = useState('All');
  const remainTodos = todos.filter(filterMap['Active']);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch({ type: 'SET_TODO_ORDER', payload: items });
  }

  const remainingTodos = remainTodos.length === 0 ? 'no todo'
    : remainTodos.length === 1 ? `${remainTodos.length} item left`
      : `${remainTodos.length} items left`;
  return (
    <>
      <GlobalStyle theme={theme} />
      <Banner theme={theme} />
      <Container>
        <Nav theme={theme} switchTheme={switchTheme} />
        <AddTodo />
        <Wrapper theme={theme}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Todos
                    filterMap={filterMap}
                    filter={filter}
                    todos={todos}
                    toggleCompleted={(id) => dispatch({ type: 'TOGGLE_COMPLETED', payload: id })}
                    deleteTodo={(id) => dispatch({ type: 'DELETE_TODO', payload: id })}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Footer
            remainingTodos={remainingTodos}
            onClearCompleted={() => dispatch({ type: 'CLEAR_COMPLETED' })}
            filterNames={filterNames}
            setFilter={setFilter}
            filter={filter}
            remainTodos={remainTodos.length}
          />
        </Wrapper>
      </Container>
    </>
  )
}

export default App
