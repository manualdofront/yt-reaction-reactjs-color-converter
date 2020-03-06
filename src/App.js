import React from 'react';
import { Provider } from 'react-redux';

import Container from './components/Container';
import RGBInput from './components/RGBInput';
import Conversor from './components/Conversor';

import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1 className="text-center">
          Processamento de Imagens
          <small style={{ fontWeight: '500' }}> | Conversão RGB</small>
        </h1>
        <RGBInput />
        <Conversor />
        <h4 className="text-center">
          JOÃO VITOR VERONESE VIEIRA
          <small> | <a href="https://github.com/joao-vieira">PERFIL </a>ou<a href="https://github.com/joao-vieira"> REPOSITÓRIO</a></small>
        </h4>
      </Container>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
