import React from 'react';
import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';
import GoogleAnalytics from '@src/components/GoogleAnalytics';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <>
      <Header />
      <GoogleAnalytics />
      {children}
      <Footer />
    </>
  );
};
