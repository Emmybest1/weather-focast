import React from 'react';
import {LeftNavItems} from '../left-nav-items/left-nav-items.component';
import './left-navigation.style.scss';

export const LeftNavigation = () => {
  return (
    <aside className="container left-nav-container">
      <h3>Discovery1</h3>
      <LeftNavItems />
      <span>{new Date().getFullYear()}</span>
    </aside>
  );
};

export default LeftNavigation;
