import React from "react";
import Pricing from "../components/pricing/Pricing";
import PageHeader from "../components/common/PageHeader";

const PricingPage = () => {
  return (
    <>
      <PageHeader image="blog.png" title="Pricing" />
      <Pricing />
    </>
  );
};

export default PricingPage;
