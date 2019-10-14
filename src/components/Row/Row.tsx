import React, { FC } from 'react';

import './Row.css';

interface IRow {
  element: any
}

const Row: FC<IRow> = ({element}) => {
  return (
    <div className="container mt-5">
      {element}
    </div>
  );
};

export default Row;
