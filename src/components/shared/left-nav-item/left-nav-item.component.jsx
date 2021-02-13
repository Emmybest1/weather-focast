import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

export const LeftNavItem = ({navItem}) => (
  <NavLink id={navItem.id} to={navItem.url}>
    {navItem.name}
  </NavLink>
);

LeftNavItem.propTypes = {
  navItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default LeftNavItem;
