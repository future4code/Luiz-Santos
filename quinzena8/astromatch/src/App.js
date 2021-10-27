import { Fragment } from 'react';
import Content from './components/Content';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Content />
    </Fragment>
  );
}

export default App;
