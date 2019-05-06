import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      atHome: true
    }
    this.toggleHeader = this.toggleHeader.bind(this)
  }

  toggleHeader() {
    this.setState((prevState) => ({atHome: !prevState.atHome}))
  }

  render() {
    return (
        <BrowserRouter>
          <Header atHome={this.state.atHome} toggleHeader={this.toggleHeader}/>
          <Switch>
              <Route exact path="/" 
                render={() => <Home toggleHeader={this.toggleHeader} />}
               />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/portfolio/webapps" component={WebApps} />
              <Route exact path="/portfolio/webapps/todolist" component={TodoList}/>
              <Route exact path="/portfolio/webapps/memegenerator" component={MemeGenerator}/>
              <Route exact path="/portfolio/webapps/analogueclock" component={AnalogueClock}/>
              <Route exact path="/cv" component={CV}/>
              <Route exact path="/about" component={About}/>
              <Route component={Error}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
    );
  }
}

export default App;
