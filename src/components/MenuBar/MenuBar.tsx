import React, {Component} from 'react';
import styled from 'styled-components/macro';

const Bar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1031;
  width: 300px;
  height: 100%;
  background-color: #1a1a1a;
`

const BarList = styled.ul`
  padding: 2em 0;
  margin: 0;
  list-style: none;
`

const BarListItem = styled.li`
  padding: 10px 0;
  color: #fff;
  text-align: center;
`

class MenuBar extends Component {
  render() {
    return (
      <Bar>
        <BarList>
          <BarListItem>item-1</BarListItem>
          <BarListItem>item-2</BarListItem>
          <BarListItem>item-3</BarListItem>
        </BarList>
      </Bar>
    );
  }
}

export default MenuBar;
