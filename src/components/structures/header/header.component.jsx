import React from 'react';
import PropTypes from 'prop-types';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import './header.style.scss';

export const Header = ({fragment}) => {
  const history = useHistory();
  const location = useLocation();

  const isRootPathName = /^\/$/g.test(location.pathname);
  return (
    <header className={`container ${location.pathname === '/' ? 'border-bottom' : ''}`}>
      <section className="header__sec1 row a-t-center a-c-center">
        <div className="row a-t-center a-c-center">
          <h4>⛈️Discovery1</h4>
          {` `}
          {!isRootPathName && <i className="fa fa-home button" onClick={() => history.push('/')}></i>}
        </div>
        <div className="menu-icon button" role="button" tabIndex={0}>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
      </section>

      {fragment}
    </header>
  );
};

Header.propTypes = {
  fragment: PropTypes.element,
};
export default Header;
