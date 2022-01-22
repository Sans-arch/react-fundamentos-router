import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';

import { Nav } from './styles';

/** Para criar âncoras de navegação com React Router, usamos o <Link>, ele funcionará como um <a>
 * normal porém a diferença é que ele não fará o refresh inteiro da página, ele só trocara a interface e não a página.
 * 
 * Assim como as <Route>, precisamos envolver os <Link> pelo <BrowserRouter>.
 * 
 * Para fazer uma navegação programática, ou seja, depois de um usuário ser autenticado ou passar por um processo de validação,
 * ele ser redirecionado automaticamente para outra rota precisamos do hook fornecido pelo React Router: `useHistory`, precisa estar
 * dentro do <BrowserRouter />
 */

export default function Layout({ onToogleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header onToogleTheme={onToogleTheme} selectedTheme={selectedTheme} />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1154654545">Post</Link>
      </Nav>
      <Routes />
      <Footer onToogleTheme={onToogleTheme} selectedTheme={selectedTheme} />
    </BrowserRouter>
  );
}
