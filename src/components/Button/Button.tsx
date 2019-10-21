import React, { FC } from 'react';

type ButtonProps = {
  title: string
}

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
    >
      { title }
    </button>
  );
};

export default Button
