import React from 'react';
import {LeftNavItem} from '../left-nav-item/left-nav-item.component';
import {menuItems} from '../../../data/menu-items.json';

export const LeftNavItems = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <LeftNavItem {...menuItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNavItems;
