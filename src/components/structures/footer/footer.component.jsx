import React from 'react';
import './footer.style.scss';

export const Footer = () => (
  <footer>
    Made with ❤️ by AfricLite <time>{new Date().getFullYear()}</time>
  </footer>
);

export default Footer;
