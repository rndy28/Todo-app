import styled, { css } from 'styled-components';
import deleteIcon from 'assets/icon-cross.svg';
import { ITodo, useTodo } from 'contexts/TodoContext';
import { Checkbox } from 'components/molecules/AddTodo';

const DeleteTodo = styled.span`
  background: url(${deleteIcon}) no-repeat center;
  width: 2rem;
  height: 2rem;
  max-width: 100%;
  @media (min-width: 800px) {
    opacity: 0;
    transition: opacity 250ms ease-in;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: .5rem;
  padding: 1.3rem 1.1rem;

  &:hover ${DeleteTodo} {
    opacity: 1;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid ${(p) => p.theme.border};
    width: 100%;
  }
`;
const Text = styled.p<{ completed: boolean }>`
  color: ${(p) => p.theme.text};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 85%;
  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
      color: ${(p) =>
        p.theme.state === 'light'
          ? 'hsl(233, 11%, 84%)'
          : 'hsl(233, 14%, 35%)'};
      transition: all 250ms ease;
    `}
`;

const Todo = ({ completed, id, text }: ITodo) => {
  const { dispatch } = useTodo();

  const toggleCompleted = (id: string) =>
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });

  const onDelete = (id: string) =>
    dispatch({ type: 'DELETE_TODO', payload: id });

  return (
    <Container>
      <Checkbox
        type="checkbox"
        onChange={() => toggleCompleted(id)}
        checked={completed}
      />
      <Text completed={completed}>{text}</Text>
      <DeleteTodo onClick={() => onDelete(id)} />
    </Container>
  );
};

export default Todo;
