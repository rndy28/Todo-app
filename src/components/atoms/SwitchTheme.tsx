import styled from 'styled-components';
import moonIcon from 'assets/icon-moon.svg';
import sunIcon from 'assets/icon-sun.svg';

type Props = {
  onThemeChange: () => void;
};

const Container = styled.div`
  background: url(${(p) => (p.theme.state === 'dark' ? moonIcon : sunIcon)})
    right no-repeat;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const SwitchTheme = ({ onThemeChange }: Props) => {
  return <Container role="button" onClick={onThemeChange}></Container>;
};

export default SwitchTheme;
