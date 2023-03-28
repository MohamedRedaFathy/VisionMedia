import React from "react";
import { Navbar } from "./index";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
