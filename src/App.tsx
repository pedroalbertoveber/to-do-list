import React, { ReactElement } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import './index.css';

function App(): ReactElement {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
