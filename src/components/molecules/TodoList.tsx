import { ITodo } from 'contexts/TodoContext';
import styled from 'styled-components';
import Todo from 'components/molecules/Todo';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.main`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

type Props = {
  filteredTodos: ITodo[];
};

const TodoList = ({ filteredTodos }: Props) => {
  return (
    <Container>
      {filteredTodos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Todo {...todo} />
            </div>
          )}
        </Draggable>
      ))}
    </Container>
  );
};

export default TodoList;
