import React from 'react';
import {LeftNavItem} from '../left-nav-item/left-nav-item.component';
import {menuItems} from '../../../data/menu-items.json';
import './left-nav-items.style.scss';

export const LeftNavItems = () => (
  <nav className="left-nav-items">
    <ul>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          <LeftNavItem {...menuItem} />
        </li>
      ))}
    </ul>
  </nav>
);

export default LeftNavItems;
