import React from 'react';
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";

type Props = {
  children?: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <Navigation/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;