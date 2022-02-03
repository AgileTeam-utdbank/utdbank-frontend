import React from "react";
import SectionTitle from "../../common/SectionTitle";
import Testimonal from "./Testimonal";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonals = () => {
  return (
    // <!-- TESTIMONALS START -->
    <section className="home-client-section pt-100 pb-50">
      <div className="container">
        {/* <!-- SECTION TITLE START --> */}
        <SectionTitle
          title="Clients Feedback"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore"
        />

        {/* <!-- SECTION TITLE END --> */}

        <div className="client-carousel-content">
          <OwlCarousel
            className="owl-theme client-carousel"
            loop
            margin={10}
            nav={true}
            items={1}
            dots={false}
            navText={[
              '<span class="flaticon-left-arrow"></span>',
              '<span class="flaticon-right-arrow"></span>',
            ]}
            navClass={[
              "carousel-control-item carousel-control-item-left",
              "carousel-control-item carousel-control-item-right",
            ]}
          >
            {/* <!-- TESTIMONAL START --> */}

            <Testimonal
              image="carousel-1.png"
              coment="Awesome dolor sit amet, consectetur adipisicing elit sed
            do eusmod tempor incididunt ut labore et dolore magna
            aliquaenminim veniam quis nostrud dolore magn doloreut
            labore dolore magn."
              name="Devit M. kolin"
              jobTitle="CEO & Founder"
            />

            {/*  <!-- TESTIMONAL END --> */}

            {/* <!-- TESTIMONAL START --> */}

            <Testimonal
              image="carousel-2.png"
              coment="Very ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae.."
              name="Sienna Miller"
              jobTitle="CTO"
            />

            {/* <!-- TESTIMONAL END --> */}
          </OwlCarousel>
        </div>
      </div>
    </section>
    // <!-- TESTIMONALS END -->
  );
};

export default Testimonals;
