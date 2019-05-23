import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import CV from '../components/CV';
import About from '../components/About';
import Error from '../components/Error';
import Portfolio from '../components/Portfolio/Portfolio';
import WebApps from '../components/WebApps';
import TodoList from '../components/TodoApp/TodoList';
import Play from '../workalongComponents/Play';
import MemeGenerator from '../components/MemeGenerator';
import AnalogueClock from '../components/AnalogueClock';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/portfolio/webapps" component={WebApps} exact />
        <Route path="/portfolio/webapps/todolist" component={TodoList} />
        <Route path="/portfolio/webapps/memegenerator" component={MemeGenerator} />
        <Route path="/portfolio/webapps/analogueclock" component={AnalogueClock} />
        <Route path="/cv" component={CV} />
        <Route path="/about" component={About} />
        <Route path="/play" component={Play} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};
export default Main;
