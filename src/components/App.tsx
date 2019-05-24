import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CV from './CV';
import About from './About';
import Error from './Error';
import Portfolio from './Portfolio';
import WebApps from './WebApps';
import TodoList from './TodoApp/TodoList';
import MemeGenerator from './MemeGenerator';
import AnalogueClock from './AnalogueClock';
import Header from './Header';
import Footer from './Footer';

const App: React.FC = () => {
  const [atHome, setAtHome] = useState();
  const homeHeader = () => {
    setAtHome(true);
  };
  const awayHeader = () => {
    setAtHome(false);
  };
  useEffect(() => {
    if (window.location.hash != '#/') {
      setAtHome(false);
    } else {
      setAtHome(true);
    }
  }, []);

  const content = (
    <HashRouter>
      <Header atHome={atHome} />
      <Switch>
        <Route exact path="/" render={() => <Home awayHeader={awayHeader} homeHeader={homeHeader} />} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/webapps" component={WebApps} />
        <Route exact path="/portfolio/webapps/todolist" component={TodoList} />
        <Route exact path="/portfolio/webapps/memegenerator" component={MemeGenerator} />
        <Route exact path="/portfolio/webapps/analogueclock" component={AnalogueClock} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </HashRouter>
  );
  return content;
};

export default App;
