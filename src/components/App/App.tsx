import React, {Component} from 'react';
import Header from '../Header';
import HomePage from '../HomePage';
import LibraryPage from '../LibraryPage';
import DetailPage from "../DetailPage";
import DemoNotification from '../DemoNotification';
import Footer from '../Footer';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          {process.env.NODE_ENV === 'development' ? <DemoNotification/> : null}
          <Header/>
          <main className="main">
            <Route path="/" component={HomePage} exact/>

            <Route path="/detail/:id" render={({match}) => (
              <DetailPage
                id={match.params.id}
              />
            )}/>

            <Route path="/library" component={LibraryPage}/>
          </main>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
