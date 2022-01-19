import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PricingPage from "../pages/PricingPage";
import ServicesPage from "../pages/ServicesPage";
import AuthenticationPage from "../pages/Authentication";
import HomePage from "../pages/HomePage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/authentication" element={<AuthenticationPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
