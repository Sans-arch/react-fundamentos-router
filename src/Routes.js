import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

/** Rotas no React são COMPONENTES!
 * <Route /> => utilizamos para representar uma rota da nossa aplicação
 * Precisamos envolver todas as nossas rotas pelo componente <BrowserRouter> que irá gerencia-las.
 * Também precisamos envolver os <Link> pelo <BrowserRouter>
 * 
 * O React Router por padrão renderiza várias rotas ao mesmo tempo, para evitar isso, devemos usar
 * um componente chamado <Switch>, o <Switch> analisará rota por rota, a primeira que lhe satisfazer
 * já encerrará a análise e ele retornara imediatamente essa rota não checando as demais.
 */

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
    enter: { opacity: 1 , transform: 'translateY(0)', position: 'absolute' },
    leave: { opacity: 0 , transform: 'translateY(50px)', position: 'absolute'},
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}