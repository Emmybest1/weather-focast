import React from 'react';
import {Header} from '../../structures/header/header.component';
import {Footer} from '../../structures/footer/footer.component';
import './home.style.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div
          className="home-container"
          style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/elaphant-1.jpg)`}}
        ></div>
        <div className="bg-overlay"></div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
