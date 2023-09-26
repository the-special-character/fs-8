import React, { PureComponent, createContext } from 'react';

const ThemeContext = createContext('light');

export class ThemeProvider extends PureComponent {
  state = {
    theme: 'light',
  };

  switchTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    const { children } = this.props;

    return (
      <ThemeContext.Provider
        value={{
          theme,
          switchTheme: this.switchTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
