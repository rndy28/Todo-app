import checkIcon from 'assets/icon-check.svg';
import { useTodo } from 'contexts/TodoContext';
import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 1rem;
  border-radius: 0.5rem;
  padding-inline: 1.1rem;
  background-color: ${(p) => p.theme.todoSurface};
  height: 4rem;
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  padding-left: 1rem;
  height: inherit;
  color: ${(p) => p.theme.text};
`;

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  appearance: none;
  outline: 0;
  border: 1px solid
    ${(p) =>
      p.theme.state === 'light' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 30%)'};
  cursor: pointer;
  margin-bottom: 0.2rem;
  &:checked {
    border: none;
    background: url(${checkIcon}) center center no-repeat,
      linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) !important;
  }
`;

const AddTodo = () => {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);
  const { dispatch } = useTodo();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a todo');
      return;
    }
    dispatch({
      type: 'ADD_TODO',
      payload: { id: uuid(), text, completed },
    });
    setCompleted(false);
    setText('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onCompleted = () => {
    setCompleted((prevCompleted) => !prevCompleted);
  };

  return (
    <Form onSubmit={onSubmit} data-testid='todo-form'>
      <Checkbox type="checkbox" onChange={onCompleted} checked={completed} />
      <Input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={onChange}
      />
    </Form>
  );
};

export default AddTodo;
