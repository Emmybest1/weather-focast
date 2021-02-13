import React from 'react';
import {useHistory} from 'react-router-dom';
import './fallback.style.scss';

export const Fallback = () => {
  const history = useHistory();
  return (
    <main>
      <div className="fallback-container">
        <img src={`${process.env.PUBLIC_URL}/assets/images/dissatisfaction.svg`} alt="" />
        <p>We are sorry what you request is invalid</p>
        <button onClick={() => history.replace('/')}>Go Home</button>
      </div>
    </main>
  );
};

export default Fallback;
