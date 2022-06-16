import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${(p) =>
    p['aria-pressed'] ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'};
  transition: color 300ms ease;
  @media (min-width: 800px) {
    &:hover {
      color: ${(p) => p.theme.optionsText_hover};
    }
  }
`;

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

const Button = ({ onClick, children, ...rest }: Props) => {
  return (
    <Container onClick={onClick} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
