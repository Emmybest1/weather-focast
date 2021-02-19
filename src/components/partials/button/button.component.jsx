import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({children, className, ...otherProps}) => {
  return (
    <button className={`button ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
