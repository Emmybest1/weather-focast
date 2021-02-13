import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

export const LeftNavItem = ({id, name, url}) => {
  return (
    <NavLink id={id} to={url}>
      {name}
    </NavLink>
  );
};

LeftNavItem.propTypes = {
  navItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default LeftNavItem;
