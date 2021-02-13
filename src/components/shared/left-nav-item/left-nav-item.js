import React from 'react';
import {NabLink} from 'react-router-dom';
import PropTypes from 'prop-types';

export const LeftNavItem = ({navItem}) => (
  <NabLink id={navItem.id} to={navItem.url}>
    {navItem.name}
  </NabLink>
);

LeftNavItem.propTypes = {
  navItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default LeftNavItems;
