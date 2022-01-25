import React from "react";
import { Link } from "react-router-dom";

const PricingAdvanced = () => {
  return (
    <div className="pricing-grid-item">
      <div className="pricing-grid-item-inner">
        <div className="pricing-item-header">
          <h3>
            <img src="assets/images/pricing-check.png" alt="icon" />
            Advanced
          </h3>
        </div>
        <div className="pricing-item-amount">
          <h4>
            <small>$</small>49.99/<span>Month</span>
          </h4>
        </div>
        <div className="pricing-item-body">
          <ul className="pricing-item-list">
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Premium support
              <span className="pricing-list-info">
                <i className="bx bxs-info-circle"></i>
              </span>
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              2 Business mastercards
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Mobile + Desktop Apps
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Messenger Integration
              <span className="pricing-list-info">
                <i className="bx bxs-info-circle"></i>
              </span>
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              5 Aila Users
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Visitor Info
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Quick Responses
              <span className="pricing-list-info">
                <i className="bx bxs-info-circle"></i>
              </span>
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              24/7 Live Chat
            </li>
            <li>
              <img
                src="assets/images/pricing-arrow.png"
                alt="icon"
                className="pricing-list-arrow"
              />
              Google Analytics
            </li>
          </ul>
          <Link
            to="/authentication"
            className="btn1 orange-gradient btn-with-image"
          >
            <i className="flaticon-login"></i>
            <i className="flaticon-login"></i>
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingAdvanced;
