import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CV from './CV';
import About from './About';
import Error from './Error';
import Portfolio from './Portfolio';
import WebsiteInformation from './WebsiteInformation';
import UniProjects from './UniProjects';
import ChatRoom from './ChatRoom';
import OpinionMiner from './OpinionMiner';
import Polygons from './Polygons';
import RomanNumerals from './RomanNumerals';
import Scheduler from './Scheduler';
import TripPlanner from './TripPlanner';
import Challenges from './Challenges';
import WebApps from './WebApps';
import TodoList from './TodoList';
import MemeGenerator from './MemeGenerator';
import AnalogueClock from './AnalogueClock';
import Header from './Header';
import Footer from './Footer';
import Imprint from './Imprint';
import StockManager from './StockManager';
import Executables from './Executables';
import FlareDetector from './FlareDetector';

const App: React.FC = () => {
  const [atHome, setAtHome] = useState<boolean>(true);
  const homeHeader = () => {
    setAtHome(true);
  };
  const awayHeader = () => {
    setAtHome(false);
  };
  useEffect(() => {
    if (window.location.hash !== '#/') {
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
        <Route exact path="/portfolio/website-information" component={WebsiteInformation} />
        <Route exact path="/portfolio/stock-manager" component={StockManager} />
        <Route exact path="/portfolio/executables" component={Executables} />
        <Route exact path="/portfolio/executables/flare-detector" component={FlareDetector} />
        <Route exact path="/portfolio/web-apps" component={WebApps} />
        <Route exact path="/portfolio/web-apps/todo-list" component={TodoList} />
        <Route exact path="/portfolio/web-apps/meme-generator" component={MemeGenerator} />
        <Route exact path="/portfolio/web-apps/analogue-clock" component={AnalogueClock} />
        <Route exact path="/portfolio/web-apps/stock-manager" component={StockManager} />
        <Route exact path="/portfolio/uni-projects" component={UniProjects} />
        <Route exact path="/portfolio/uni-projects/chat-room" component={ChatRoom} />
        <Route exact path="/portfolio/uni-projects/opinion-miner" component={OpinionMiner} />
        <Route exact path="/portfolio/uni-projects/polygons" component={Polygons} />
        <Route exact path="/portfolio/uni-projects/roman-numerals" component={RomanNumerals} />
        <Route exact path="/portfolio/uni-projects/scheduler" component={Scheduler} />
        <Route exact path="/portfolio/uni-projects/trip-planner" component={TripPlanner} />
        <Route exact path="/portfolio/coding-challenges" component={Challenges} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/about" component={About} />
        <Route exact path="/imprint" component={Imprint} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </HashRouter>
  );
  return content;
};

export default App;
