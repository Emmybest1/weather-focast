import React from 'react';
import './footer.style.scss';

export const Footer = () => (
  <footer>
    <span className="social-media-wrapper">
      <a
        href="https://www.instagram.com/creativedevelopals/"
        target="_blank"
        rel="noreferrer"
        aria-describedby="instagramLink"
      >
        <span id="instagramLink" style={{display: 'none'}} aria-hidden={true}>
          Link to Discovery1 founders instagram page
        </span>
        <i class="fab fa-instagram-square"></i>
      </a>

      <a
        href="https://www.facebook.com/creativedevelopals"
        target="_blank"
        rel="noreferrer"
        aria-describedby="facebookLink"
      >
        <span id="facebookLink" style={{display: 'none'}} aria-hidden={true}>
          Link to Discovery1 founders facebook page
        </span>
        <i class="fab fa-facebook-square"></i>
      </a>
    </span>

    <span>
      Made with ❤️ by CreativeDevelopals <time>{new Date().getFullYear()}</time>
    </span>
  </footer>
);

export default Footer;
