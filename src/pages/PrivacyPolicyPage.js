import React from "react";
import PrivacyPolicy from "../components/privacy-policy/PrivacyPolicy";
import PageHeader from "../components/common/PageHeader";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHeader image="terms.png" title="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
