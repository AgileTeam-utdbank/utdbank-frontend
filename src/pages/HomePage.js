import React from "react";
import Topbar from "../components/common/Topbar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";
import Counters from "../components/home/counter/Counters";
import Facility from "../components/home/Facility";
import HomeContact from "../components/home/HomeContact";
import HomePricing from "../components/home/HomePricing";
import HomeService from "../components/home/HomeService";
import Testimonals from "../components/home/testimonal/Testimonals";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counters />
      <HomeService />
      <HomePricing />
      <Facility />
      <HomeContact />
      <Testimonals />
    </>
  );
};

export default HomePage;
