import React from 'react';
import {LeftNavItem} from '../left-nav-item/left-nav-item';
import {menuItems} from '../../../utils/menu-items.json';

const LeftNavItems = () => {
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
