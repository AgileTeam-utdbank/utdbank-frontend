import React from "react";
import PageHeader from "../components/common/PageHeader";
import Service from "../components/services/Service";

const ServicePage = () => {
  return (
    <>
      <PageHeader title="Services" image="terms.png" />
      <Service />
    </>
  );
};

export default ServicePage;
