import * as React from 'react';
import classNames from 'classnames';

import './Button.css';

interface IButton {
  label: string
  onClick(): void
  className?: string
  active?: boolean
  href?: string
  disabled?: boolean
  target?: string
}

const Button: React.FC<IButton> = ({ label, onClick, className, active, disabled, ...attrs }) => {

  const onClickAction = (e: any) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    return onClick();
  };

  const classes = classNames(
    'btn',
    className,
    { active }
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={ classes }
      onClick={ onClickAction }
      disabled={ disabled }
      { ...attrs }
    >
      { label }
    </Tag>
  );
};

export default Button;
