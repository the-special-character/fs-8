import React, { PureComponent, createContext } from 'react';

const LocaleContext = createContext();

export class LocaleProvider extends PureComponent {
  state = {
    locale: 'english',
  };

  switchLocale = locale => {
    this.setState({ locale });
  };

  render() {
    const { children } = this.props;
    const { locale } = this.state;

    return (
      <LocaleContext.Provider
        value={{
          locale,
          switchLocale: this.switchLocale
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleContext;
