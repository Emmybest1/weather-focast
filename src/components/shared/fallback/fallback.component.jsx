import React from 'react';
import {useHistory} from 'react-router-dom';
import './fallback.style.scss';

export const Fallback = () => {
  const history = useHistory();
  return (
    <div className="fallback-container">
      <main>
        <img src={`${process.env.PUBLIC_URL}/assets/images/dissatisfaction.svg`} alt="" />
        <p>We are sorry what you request is invalid</p>
        <button onClick={() => history.replace('/')}>Go Home</button>
      </main>
    </div>
  );
};

export default Fallback;
