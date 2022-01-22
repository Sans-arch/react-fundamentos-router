import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

/**
 * Para fazer uma navegação programática, ou seja, depois de um usuário ser autenticado ou passar por um processo de validação,
 * ele ser redirecionado automaticamente para outra rota precisamos do hook fornecido pelo React Router: `useHistory`, precisa estar
 * dentro do <BrowserRouter />
 */

export default function Header({ onToogleTheme, selectedTheme }) {
  const history = useHistory();

  function handleNavigate() {
    // vai adicionar no histórico do usuário uma nova URL e além de adicionar vai redirecionar para essa nova URL
    history.push('/');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToogleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚' }
      </button>
      <button
        onClick={handleNavigate}
        style={{ color: '#fff'}}
      >
        Voltar para a Home
      </button>
    </Container>
  );
}