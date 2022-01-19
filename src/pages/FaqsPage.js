import React from "react";
import ContactForm from "../components/common/ContactForm";
import PageHeader from "../components/common/PageHeader";

import Faqs from "../components/faqs/Faqs";

const FaqsPage = () => {
  return (
    <>
      <PageHeader title="FAQS" image="blog.png" />
      <Faqs />
      <ContactForm
        formTitle="Do You Have Any Question?"
        buttonTitle="Submit A Question"
      />
    </>
  );
};

export default FaqsPage;
