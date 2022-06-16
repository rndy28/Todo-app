import Banner from 'components/atoms/Banner';
import Nav from 'components/molecules/Nav';
import Main from 'components/organism/Main';
import { TodoProvider } from 'contexts/TodoContext';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { darkTheme, lightTheme } from 'styles/theme';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const switchTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider
      theme={
        theme === 'light'
          ? { ...lightTheme, state: theme }
          : { ...darkTheme, state: theme }
      }
    >
      <GlobalStyle />
      <Banner data-testid="banner" role="banner" />
      <div className="container">
        <Nav onThemeChange={switchTheme} />
        <TodoProvider>
          <Main />
        </TodoProvider>
      </div>

    </ThemeProvider>
  );
};

export default App;
