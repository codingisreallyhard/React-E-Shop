import React from "react";

import "./Feature.css";

function Feature() {
  return (
    <div className="gridfeature">
      <div className="feature">
        <i class="bi bi-truck feature-icon"></i>
        <p className="feature-title">
          We guarantee shipping for every product!
        </p>
        <p className="feature-text">
          The shipping is subjected to a price plan that you can check out
          below!
        </p>
      </div>
      <div className="feature">
        <i className="bi bi-box feature-icon"></i>
        <p className="feature-title">We offer 14 days cash-back guarantee</p>
        <p className="feature-text">
          If the product is not what you wanted, you can return it without any
          cost or hassle!
        </p>
      </div>
      <div className="feature">
        <i className="bi bi-headset feature-icon"></i>
        <p className="feature-title">Support 24/7 for our clients</p>
        <p className="feature-text">
          We offer support for our clients 24/7, for the best results please
          check in to your nearest call-center.
        </p>
      </div>
    </div>
  );
}

export default Feature;
