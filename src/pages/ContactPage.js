import React from "react";

import Contact from "../components/contact/Contact";
import ContactForm from "../components/common/ContactForm";
import PageHeader from "../components/common/PageHeader";

const ContactPage = () => {
  return (
    <>
      <PageHeader image="contact-us-bg.png" title="Contact Us" />
      <Contact />
      <ContactForm formTitle="Leave a message" buttonTitle="Send A Message" />
    </>
  );
};

export default ContactPage;
