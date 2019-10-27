import React, { Component } from 'react';
import Header from '../Header';
import HomePage from '../HomePage';
import LibraryPage from '../LibraryPage';
import DetailPage from "../DetailPage";
import DemoNotification from '../DemoNotification';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from '../Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import themes from '../../themes';

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 66px;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 66px);
  }
  
  .main {
    flex: 1 0 auto;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ themes }>
        <Router>
          <GlobalStyle/>
          <div className="app">
            { process.env.NODE_ENV === 'development' ? <DemoNotification /> : null }
            <Header/>
            <main className="main">
              <Route path="/" component={ HomePage } exact/>

              <Route path="/detail/:id" render={ ({ match }) => (
                <DetailPage
                  id={ match.params.id }
                />
              ) }/>

              <Route path="/library" component={ LibraryPage }/>
            </main>

            <Footer/>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
