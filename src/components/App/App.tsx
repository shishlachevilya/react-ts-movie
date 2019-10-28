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
import styled from 'styled-components/macro';

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
`;

type AppProps = {
  currentTheme: string
}

const Test = styled.div`
  padding: 1em;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`

class App extends Component<{}, AppProps> {
  state = {
    currentTheme: 'dark'
  };

  render() {
    return (
      // @ts-ignore
      <ThemeProvider theme={ themes[this.state.currentTheme] }>
        <Router>
          <GlobalStyle/>
          <div className="app">

            <Test>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt hic inventore numquam possimus sint sunt ullam vero voluptatum! Hic illo, minima nihil possimus similique velit. Amet, consectetur dicta excepturi exercitationem fugit mollitia soluta voluptatum. Commodi consequuntur, cum, dolore dolores eum hic optio possimus qui quos recusandae tempore voluptatem.</Test>

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
