import React from "react";
import About from "../components/about/About";
import Retail from "../components/about/Retail";
import PageHeader from "../components/common/PageHeader";

const AboutUsPage = () => {
  return (
    <>
      <PageHeader image="about-page.png" title="About Us" />
      <About />
      <Retail />
    </>
  );
};

export default AboutUsPage;
