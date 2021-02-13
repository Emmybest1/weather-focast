import React from 'react';
import PropTypes from 'prop-types';
import './input.style.scss';

export const Input = ({id, type, labelText, ...otherProps}) => {
  return (
    <>
      {labelText && <label for={id}>{labelText}</label>}

      {type === 'textarea' ? (
        <textarea id={id} cols="30" rows="10" {...otherProps}></textarea>
      ) : (
        <input type={type} id={id} {...otherProps} aria-label={labelText} />
      )}
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  labelText: PropTypes.string,
};
export default Input;
