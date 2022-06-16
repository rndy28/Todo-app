import '@testing-library/jest-dom';
import App from 'App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('render app without crash', async () => {
    render(<App />);

    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('todo-form')).toBeInTheDocument();
  });
});
