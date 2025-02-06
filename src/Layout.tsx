import React from "react";
import PublicHeader from "./components/PublicHeader";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <PublicHeader />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
