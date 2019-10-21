import React, {FC} from 'react';
import classNames from 'classnames';

import {IListGroup} from '../ListGroup/ListGroup';

import './ListGroupItem.css';

interface IListGroupItem extends IListGroup{
  active?: boolean
  disabled?: boolean
}

const ListGroupItem:FC<IListGroupItem> = ({children, className, disabled, active, ...attrs}) => {

  const classes = classNames(
    'list-group-item',
    className,
    { disabled },
    { active },
  );

  return (
    <li
      className={classes}
      {...attrs}
    >
      {children}
    </li>
  );
};

export default ListGroupItem;
