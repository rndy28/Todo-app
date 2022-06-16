import styled from 'styled-components';
import SwitchTheme from 'components/atoms/SwitchTheme';

type Props = {
  onThemeChange: () => void;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: hsl(0, 0%, 100%);
  letter-spacing: 1rem;
  @media (min-width: 800px) {
    font-size: 2.7rem;
  }
`;

const Nav = ({ onThemeChange }: Props) => {

  return (
    <Container data-testid='nav'>
      <Title>TODO</Title>
      <SwitchTheme onThemeChange={onThemeChange} />
    </Container>
  );
};

export default Nav;
