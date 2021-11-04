import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <main>
          <Routes />
        </main>
      </Router>
    </>
  );
}

export default App;
