import React from "react";
import AboutTwo from "./Components/AboutTwo";
import BannerOne from "./Components/BannerOne";
import CounterOne from "./Components/CounterOne";
import Footer from "../../components/Footer";
import Header from "../../components/PublicHeader";
import ProcessOne from "./Components/ProcessOne";
import ServicesTwo from "./Components/ServicesTwo";
import TeamTwo from "./Components/TeamTwo";

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <BannerOne />
        <ServicesTwo />
        <AboutTwo />
        <CounterOne />
        <ProcessOne />
        {/* <TeamTwo /> */}
      </div>
    </div>
  );
}

export default Home;
