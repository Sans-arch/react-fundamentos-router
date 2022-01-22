import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';

export default function Layout({ onToogleTheme, selectedTheme }) {
  return (
    <>
      <Header onToogleTheme={onToogleTheme} selectedTheme={selectedTheme} />
      <Routes />
      <Footer onToogleTheme={onToogleTheme} selectedTheme={selectedTheme} />
    </>
  );
}
