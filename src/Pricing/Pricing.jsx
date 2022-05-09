import React from "react";
import "./Pricing.css";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="container">
        <div className="pricing-head">
          <h2>Course Pricing</h2>
          <p>Choose pricing that suits to your need.</p>
        </div>
        <div className="pricing-inside-grid">
          <PricingCard
            img="bx bxs-star star1"
            free="free"
            price="0"
            month="/month"
            desc1="Free e-book for every class"
            desc2="Materials update every day"
            desc3="Free download material videos"
            desc4="Unlock 5 material videos"
            button="Your Current Package"
            desc5="Unlock 5 material videos"
          />
          <PricingCard
            img="bx bx-key star2"
            free="Express"
            price="75"
            month="/month"
            desc1="Free e-book for every class"
            desc2="Materials update every day"
            desc3="Free download material videos"
            desc4="Unlock 5 material videos"
            button="Buy Express"
            desc5="Unlock 5 material videos"
          />
          <PricingCard
            img="bx bxs-crown star3"
            free="Premium"
            price="115"
            month="/month"
            desc1="Free e-book for every class"
            desc2="Materials update every day"
            desc3="Free download material videos"
            desc4="Unlock 5 material videos"
            desc5="Unlock 5 material videos"
            button="Buy Premium"
          />
        </div>
      </div>
    </div>
  );
}
