import React from 'react';
import {Header} from '../../structures/header/header.component';
import {Footer} from '../../structures/footer/footer.component';
import {LeftNavigation} from '../../shared/left-navigation/left-navigation.component';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <LeftNavigation />
      </main>

      <Footer />
    </>
  );
};

export default Home;
