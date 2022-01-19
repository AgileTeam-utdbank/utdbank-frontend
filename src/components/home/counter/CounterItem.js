import React from "react";

const CounterItem = (props) => {
  const { number, sign, size, title, loader } = props;

  return (
    //{/* <!-- COUNTER ITEM START --> */}
    <div className="counter-item">
      <h3>
        <span className="counter">{number}</span>
        <span className={`counter-text-${size}`}>{sign}</span>
      </h3>
      <p>{title}</p>
      {loader && (
        <div className="counter-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
    //{/* <!-- COUNTER ITEM END --> */}
  );
};

export default CounterItem;
