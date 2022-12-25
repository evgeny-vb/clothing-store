import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 py-4 px-2 md:p-10 flex justify-between">
      <div className="flex flex-col">
        <p className="text-2xl pb-3">Joe Design</p>
        <p className="text-sm">Copyright &copy; <span>2027</span> by Joe Design, Inc.
          All rights reserved.</p>
      </div>
      <div className="text-right text-sm md:text-md">
        <p className="pb-1">
          Address: 327 Harrison St., 1st Floor, Los Angeles, CA 781169
        </p>
        <p className="pb-1">
          111-222-33333
        </p>
        <p className="pb-1">
          hello@joedesign.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;