import React from 'react';
import PropTypes from 'prop-types';
import {LeftNavItems} from '../left-nav-items/left-nav-items.component';
import './left-navigation.style.scss';

export const LeftNavigation = ({shownNavigation}) => (
  <>
    {shownNavigation && (
      <aside className="left-nav-container">
        <h3 className="logo-text">Discovery1</h3>

        <LeftNavItems />
      </aside>
    )}
  </>
);

LeftNavigation.propTypes = {
  shownNavigation: PropTypes.bool.isRequired,
};
export default LeftNavigation;
