import React from "react";

const ServiceItem = ({ image, title, description }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="home-service-item fluid-height">
        <div className="home-service-details full-height">
          <div className="home-service-image">
            <img src={`assets/images/${image}`} alt="service" />
          </div>
          <div className="home-service-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
