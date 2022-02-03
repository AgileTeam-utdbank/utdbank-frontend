import React from "react";
import SectionTitle from "../common/SectionTitle";
import SectionTitleItem from "./SectionTitleItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Features = () => {
  return (
    <section
      className="feature-section p-tb-100 overflow-x-hidden"
      id="feature-section"
    >
      <div className="container">
        <SectionTitle
          title="Our valuable features"
          description="Lorem ipsum dolor sit amet consectetur adipisicing sed do"
        />

        <div className="home-feature">
          <OwlCarousel
            className="owl-theme home-feature-carousel"
            loop
            margin={10}
            nav={true}
            dots={false}
          >
            <SectionTitleItem
              title="Fully Encrypted"
              color="blue"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="file.png"
            />

            <SectionTitleItem
              title="Transparent Pricing"
              color="orange"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="hand.png"
            />
            <SectionTitleItem
              title="Instant cashout"
              color="green"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="megaphone.png"
            />
            <SectionTitleItem
              title="Safe and Secure"
              color="orange"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="shield.png"
            />

            <SectionTitleItem
              title="Fully Encrypted"
              color="blue"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="file.png"
            />

            <SectionTitleItem
              title="Transparent Pricing"
              color="orange"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="hand.png"
            />

            <SectionTitleItem
              title="Safe and Secure"
              color="green"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="megaphone.png"
            />

            <SectionTitleItem
              title="Instant cashout"
              color="orange"
              description="Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed
                    deimod tempor incid-idunt ut dolor sit amet"
              image="shield.png"
            />
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Features;
