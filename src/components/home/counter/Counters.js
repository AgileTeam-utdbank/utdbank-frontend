import React from "react";
import SectionTitle from "../../common/SectionTitle";
import CounterItem from "./CounterItem";

const Counters = () => {
  return (
    // <!-- COUNTERS START-->
    <section className="counter-section pt-100 pb-70">
      <div className="container">
        {/* <!-- SECTION TITLE START --> */}

        <SectionTitle title="We always try to evaluate customers Values" />

        {/* <!-- SECTION TITLE END --> */}

        <div className="counter-content">
          {/* <!-- COUNTER ITEM START --> */}

          <CounterItem
            number="70"
            sign="+"
            size="lg"
            title="Contributors"
            loader={false}
          />

          {/* <!-- COUNTER ITEM END --> */}

          {/* <!-- COUNTER ITEM START --> */}

          <CounterItem
            number="40"
            sign="K"
            size="sm"
            title="Feedback"
            loader={true}
          />

          {/* <!-- COUNTER ITEM END --> */}

          {/* <!-- COUNTER ITEM START --> */}

          <CounterItem
            number="1000"
            sign="K"
            size="sm"
            title="Downloaded"
            loader={true}
          />

          {/* <!-- COUNTER ITEM END --> */}

          {/* <!-- COUNTER ITEM START --> */}

          <CounterItem
            number="590"
            sign="+"
            size="lg"
            title="Workers"
            loader={true}
          />

          {/* <!-- COUNTER ITEM END --> */}
        </div>
      </div>
    </section>
    //{/* <!-- COUNTERS END --> */}
  );
};

export default Counters;
