import styled from "styled-components"
import Button from "./Button"
import FilterList from "./FilterList"

const Container = styled.div`
display: flex;
justify-content: space-between;
position: relative;
border-radius: 0.5rem;
color: hsl(236, 9%, 61%);
padding: 1.1rem ;
font-size: 1rem;
`

const Footer = ({ remainingTodos, onClearCompleted, filterNames, setFilter, filter }) => {
    return (
        <Container as='footer' >
            <span>{remainingTodos}</span>
            <FilterList filterNames={filterNames} setFilter={setFilter} filter={filter} />
            <Button onClick={onClearCompleted} text='Clear Completed' />
        </Container>
    )
}

export default Footer
