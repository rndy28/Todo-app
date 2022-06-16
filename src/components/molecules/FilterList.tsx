import Button from 'components/atoms/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  position: absolute;
  width: 100%;
  left: 0;
  top: 5rem;
  box-shadow: ${(props) =>
    props.theme.state === 'light' &&
    'rgba(194, 195, 214, 0.5) 0px 25px 35px -17px'};
  background-color: ${(p) => p.theme.todoSurface};
  padding: 1.1rem;
  border-radius: 0.5rem;
  a {
    font-weight: 700;
  }
  &::after {
    content: 'Drag and drop to reorder list';
    position: absolute;
    top: 5rem;
    width: 15rem;
    text-align: center;
  }
  @media (min-width: 800px) {
    border-radius: 0;
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    padding: 0;
    box-shadow: none;
    background-color: unset;
  }
`;

const FILTER_TYPES = ['all', 'active', 'completed'] as const;

export type FilterType = typeof FILTER_TYPES[number];

type Props = {
  filterType: FilterType;
  onFilterChange: (type: FilterType) => void;
};

const FilterList = ({ filterType, onFilterChange }: Props) => {
  return (
    <Container>
      {FILTER_TYPES.map((type) => (
        <Button
          aria-pressed={type === filterType}
          key={type}
          onClick={() => onFilterChange(type)}
        >
          {type}
        </Button>
      ))}
    </Container>
  );
};

export default FilterList;
