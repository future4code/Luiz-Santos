import React, { Component } from 'react';
import Content from './components/Content';
import GlobalStyle from './globalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Content />
      </>
    );
  }
}

export default App;
