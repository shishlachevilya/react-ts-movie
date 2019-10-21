import React, {FC} from 'react';
import classNames from 'classnames';

import './ListGroup.css';

export interface IListGroup {
  children: any
  className?: string
}

const ListGroup:FC<IListGroup> = ({children, className, ...attrs}) => {

  const classes = classNames(
    'list-group',
    className
  );

  return (
    <ul
      className={classes}
      {...attrs}
    >
      {children}
    </ul>
  );
};

export default ListGroup;
