import React from "react";

import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Counters from "../components/home/counter/Counters";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";

const HomePage = () => {
  return (
    <>
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counters />
    </>
  );
};

export default HomePage;
