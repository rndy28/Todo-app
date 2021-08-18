import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AddTodo from './components/AddTodo';
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import Todos from "./components/Todos";
import { ThemeContext } from "./context/ThemeContext";
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
overflow: hidden;
position: relative;
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
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem('todos')) || []
  )
  const [filter, setFilter] = useState('All');
  const remainTodos = todos.filter(filterMap['Active'])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const { theme, switchTheme } = useContext(ThemeContext)


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => todo.id === id
      ? { ...todo, completed: !todo.completed } : todo))
  }
  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed === false))
  }
  const remainingTodos = remainTodos.length === 0 ? 'no todo'
    : remainTodos.length === 1 ? `${remainTodos.length} item left`
      : `${remainTodos.length} items left`;
  return (
    <>
      <GlobalStyle theme={theme}/>
        <Banner theme={theme}/>
        <Container>
          <Nav theme={theme} switchTheme={switchTheme}/>
          <AddTodo setTodos={setTodos} todos={todos} />
          <Wrapper theme={theme}>
            <Todos
              filterMap={filterMap}
              filter={filter}
              todos={todos}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              />
            <Footer
              remainingTodos={remainingTodos}
              onClearCompleted={clearCompleted}
              filterNames={filterNames}
              setFilter={setFilter}
              filter={filter}
            />
          </Wrapper>
        </Container>
    </>
  )
}

export default App
