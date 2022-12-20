import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header/>
      <main className="mb-auto">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;