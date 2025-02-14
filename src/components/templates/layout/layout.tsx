import React from 'react';
import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';
import V2Footer from '../footer/v2_footer'
import GoogleAnalytics from '@src/components/GoogleAnalytics';
import { ToastContainer } from 'react-toastify';
import FloatingContact from '@src/components/shared/floating-icons';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <>
      <ToastContainer />
      <Header />
      <GoogleAnalytics />
      <div className="pt-24 md:pt-28 lg:pt-52">{children}</div>
      <FloatingContact />
      <V2Footer />
    </>
  );
};
