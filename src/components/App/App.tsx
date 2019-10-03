import React, {Component} from 'react';
import Header from '../Header';
import HomePage from '../HomePage';
import LibraryPage from '../LibraryPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Card from '../Card';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main className="main">
            <Route path="/" component={HomePage} exact/>

            <Route path="/detail" render={() => <Card Poster="http://dummyimage.com/300x424/6CC3D5" Title="test title" imdbID="tt1300854" /> } />

            <Route path="/library" component={LibraryPage}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
