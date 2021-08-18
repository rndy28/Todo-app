import styled from 'styled-components';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`
const Title = styled.h1`
font-size: 2rem;
color: hsl(0, 0%, 100%);
letter-spacing: 1rem;
text-transform: uppercase;
@media(min-width: 800px){
    font-size: 2.7rem;
}
`

const ToggleTheme = styled.span`
background: url(${props => props.theme === 'light' ? moonIcon : sunIcon}) right no-repeat;
width: 3rem;
height: 3rem;
`

export const Nav = ({ theme, switchTheme }) => {
    return (
        <Container>
            <Title>todo</Title><ToggleTheme theme={theme} onClick={switchTheme} />
        </Container>
    )
}