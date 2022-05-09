import React from "react";
import "./Pricing.css";

export default function PricingCard({
  img,
  free,
  price,
  month,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  button,
}) {
  return (
    <div className="pricing-card">
      <div className="free-flex">
        <i className={img}></i>
        <div className="free-right">
          <p>{free}</p>
          <div className="month-flex">
            <span className="absolute-span">$</span>
            <div className="price">{price}</div>
            <div className="month">
            {month}
            </div>
          </div>
        </div>
      </div>
      <hr className="hr1"/>
      <ul className="price-ul">
        <li><i class='bx bxs-circle'></i>{desc1}</li>
        <li><i class='bx bxs-circle'></i>{desc2}</li>
        <li><i class='bx bxs-circle'></i>{desc3}</li>
        <li><i class='bx bxs-circle'></i>{desc4}</li>
        <li><i class='bx bxs-circle'></i>{desc5}</li>
      </ul>

      <div className="price-btn">
        <button>{button}</button>
      </div>
    </div>
  )
}
