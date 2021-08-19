import PropTypes from 'prop-types'
import styled from "styled-components"
import { darkTheme, lightTheme } from "../theme/theme"

const StyledButton = styled.button`
cursor: pointer;
    color: ${props => props["aria-pressed"] ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'};
    transition: ${props => props["aria-pressed"] || 'color 300ms ease'};
    @media(min-width: 800px) {
        &:hover {
        color:  ${props => props.theme === 'light' ? lightTheme.optionsText_hover : darkTheme.optionsText_hover};
    }
    }
`

const Button = ({ text, onClick, isPressed, theme }) => {
    return (
        <>
            <StyledButton
                type="button"
                onClick={onClick}
                as='a'
                aria-pressed={isPressed}
                theme={theme}
            >
                <span>{text}</span>
            </StyledButton>
        </>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isPressed: PropTypes.bool
}
export default Button
