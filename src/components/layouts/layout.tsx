import React, { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="w-full  md:w-5/6 mx-auto flex flex-col relative items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
