import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

export const ProtectedRoute = ({shouldRender, path, isExact, ...otherProps}) => (
  <>{shouldRender ? <Route exact={isExact} path={path} {...otherProps} /> : <div>FallBack Here 😭</div>}</>
);

ProtectedRoute.propTypes = {
  shouldRender: PropTypes.bool.isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
