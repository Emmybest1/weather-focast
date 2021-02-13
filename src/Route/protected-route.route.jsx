import React from 'react';
import PropTypes from 'prop-types';
import {Route, useHistory} from 'react-router-dom';

export const ProtectedRoute = ({shouldRender, path, isExact, ...otherProps}) => {
  const history = useHistory();

  return <>{shouldRender ? <Route exact={isExact} path={path} {...otherProps} /> : history.replace('/fallback')}</>;
};

ProtectedRoute.propTypes = {
  shouldRender: PropTypes.bool.isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
