import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setLightTheme, setDarkTheme, toggleMenu} from '../../redux/actions';
import styled from 'styled-components/macro';

const Navbar = styled.nav`
  padding: .5rem 1rem;
  
  .link {
    color: ${props => props.theme.color};
  }
`;

const Logo = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${props => props.theme.color};
`;

const HeaderBlock = styled.header`
  background-color: ${props => props.theme.backgroundColor};
`;

type HeaderProps = {
  dark: () => void
  light: () => void
  toggle: () => void
  isOpen: boolean
}

const Header: FC<HeaderProps> = ({isOpen, toggle, dark, light}) => {

  const styleBtn = {
    marginLeft: '15px'
  };

  return (
    <HeaderBlock className="fixed-top">
      <Navbar className="navbar">
        <Link to="/">
          <Logo
            viewBox="0 0 82 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-img"
          >
            <path
              d="M5.99209 0.00585938H76.0078C79.374 0.00585938 81.996 2.62791 81.996 5.99405V72.0059C81.996 75.3366 79.374 77.994 76.0078 77.994H5.99209C2.66139 77.994 0.00390625 75.3366 0.00390625 72.0059V5.99405C0.00390625 2.62791 2.66139 0.00585938 5.99209 0.00585938ZM9.00391 4.0098V11.9822H17.0118V4.0098H9.00391ZM23 4.0098V11.9822H31.0078V4.0098H23ZM36.996 4.0098V11.9822H45.0039V4.0098H36.996ZM50.9921 4.0098V11.9822H59V4.0098H50.9921ZM64.9882 4.0098V11.9822H72.996V4.0098H64.9882ZM13.0078 15.9862C9.71257 16.3051 7.05509 18.998 7.01965 22.0098V55.9901C7.33855 59.2854 10.0315 61.9429 13.0078 61.9783H68.9921C72.2874 61.6594 74.9449 58.9665 75.0157 55.9901V22.0098C74.6614 18.6791 72.0039 16.057 68.9921 15.9862H13.0078ZM27.996 24.6673V53.2618C37.3858 48.4074 47.2008 43.1988 55.3149 38.9822C45.3228 33.7381 37.0315 29.3799 27.996 24.6673V24.6673ZM9.00391 65.9822V73.9901H17.0118V65.9822H9.00391ZM23 65.9822V73.9901H31.0078V65.9822H23ZM36.996 65.9822V73.9901H45.0039V65.9822H36.996ZM50.9921 65.9822V73.9901H59V65.9822H50.9921ZM64.9882 65.9822V73.9901H72.996V65.9822H64.9882Z"/>
          </Logo>
        </Link>

        <div>
          <button
            className="btn btn-dark"
            onClick={dark}
          >
            dark
          </button>

          <button
            className="btn btn-light"
            style={styleBtn}
            onClick={light}
          >
            light
          </button>

          <Link to="/" className="btn btn-link link">
            main page
          </Link>

          <Link to="/library" className="btn btn-link link">
            my library
          </Link>

          <button
            className="btn btn-dark"
            onClick={toggle}
          >
            {isOpen ? 'close menu' : 'open menu'}
          </button>
        </div>
      </Navbar>
    </HeaderBlock>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    isOpen: state.isOpen
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dark: () => dispatch(setDarkTheme),
    light: () => dispatch(setLightTheme),
    toggle: () => dispatch(toggleMenu)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
