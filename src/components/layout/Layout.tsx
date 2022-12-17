import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <main className="mb-auto">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;