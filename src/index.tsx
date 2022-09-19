import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
// import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import Tournament from './pages/Tournament/Tournament';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './store';

const App = () => {
  return (
    <Container>
      <H4 style={{ paddingLeft: '15px' }}>FACEIT Tournaments</H4>
      <Tournament></Tournament>
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
