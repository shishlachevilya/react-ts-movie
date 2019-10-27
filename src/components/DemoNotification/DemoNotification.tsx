import React from 'react';
import styled from 'styled-components/macro';
import { withTheme } from 'styled-components';

import Info from './info.svg';

const Notif = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: .75rem 1rem;
  background-color: ${props => props.theme['dark'].backgroundColor};
`;

const NotifDesc = styled.span`
  margin-left: 1em;
  color: #fff;
  font-size: 0.765625rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const DemoNotification = ({theme}: any) => {
  return (
    <Notif>
      <img src={ Info } alt="info"/>
      <NotifDesc>Development version</NotifDesc>
    </Notif>
  )
};

export default withTheme(DemoNotification);