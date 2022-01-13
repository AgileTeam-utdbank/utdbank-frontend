import React from "react";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Features from "../components/home/Features";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
    </>
  );
};

export default HomePage;
