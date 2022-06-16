
import { useTodo } from 'contexts/TodoContext';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import FilterList, { FilterType } from 'components/molecules/FilterList';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  border-radius: 0.5rem;
  color: hsl(236, 9%, 61%);
  padding: 1.1rem;
  font-size: 1rem;
`;

type Props = {
  remainingTodos: 'no todo' | '1 item left' | `${number} items left`;
  filterType: FilterType;
  onFilterChange: (type: FilterType) => void;
};

const Footer = ({ filterType, onFilterChange, remainingTodos }: Props) => {
  const { dispatch } = useTodo();

  const onClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <Container data-testid='footer'>
      <span>{remainingTodos}</span>
      <FilterList filterType={filterType} onFilterChange={onFilterChange} />
      <Button onClick={onClearCompleted}>Clear Completed</Button>
    </Container>
  );
};

export default Footer;
