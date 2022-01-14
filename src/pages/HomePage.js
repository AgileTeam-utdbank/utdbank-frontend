import React from "react";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Counters from "../components/home/counter/Counters";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/homeAbout/HomeAbout";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counters />
    </>
  );
};

export default HomePage;
