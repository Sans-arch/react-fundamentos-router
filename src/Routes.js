import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';

/** Rotas no React são COMPONENTES!
 * <Route /> => utilizamos para representar uma rota da nossa aplicação
 * Precisamos envolver todas as nossas rotas pelo componente <BrowserRouter> que irá gerencia-las.
 *  
 */

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  )
}