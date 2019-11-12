import React, {FC} from 'react';
import Header from '../Header';
import HomePage from '../HomePage';
import LibraryPage from '../LibraryPage';
import DetailPage from "../DetailPage";
import DemoNotification from '../DemoNotification';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import Footer from '../Footer';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import themes from '../../themes';
import MenuBar from '../MenuBar';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import './App.css';
import {connect} from 'react-redux';

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

const Main = styled.main`
  background-color: ${props => props.theme.backgroundColor};
`;

type AppProps = {
  isOpen: boolean
  theme: string
}

const App: FC<AppProps> = ({theme, isOpen}) => {
  return (
    // @ts-ignore
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <GlobalStyle/>
        <div className="app">
          <TransitionGroup>
            {isOpen &&
            <CSSTransition
              in={isOpen}
              timeout={1000}
              classNames="menu-bar"
              unmountOnExit
            >
              <MenuBar/>
            </CSSTransition>
            }
          </TransitionGroup>

          {process.env.NODE_ENV === 'development' && <DemoNotification/>}

          <Header/>
          <Main className="main">
            <Route path="/" component={HomePage} exact/>

            <Route path="/detail/:id" render={({match}) => (
              <DetailPage
                id={match.params.id}
              />
            )}/>

            <Route path="/library" component={LibraryPage}/>
          </Main>
          <Footer/>
        </div>
      </Router>
    </ThemeProvider>
  )
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    isOpen: state.isOpen
  }
};

export default connect(mapStateToProps)(App)
