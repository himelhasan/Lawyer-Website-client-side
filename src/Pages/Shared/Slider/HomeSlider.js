import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import sliderCss from "./HomeSlider.css";

import img1 from "../../../Media/r44_2_landing_page_photo_4.jpg";
import img2 from "../../../Media/orange-county-train-accident-lawyer.jpg";
import img3 from "../../../Media/iStock-1045929296.jpg";
import img4 from "../../../Media/truck-accident-attorneys-1170x670-1.jpg";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <AwesomeSlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      cssModule={sliderCss}
      className="aws-btn bg-gradient-to-r from-current via-black to-white mb-20"
    >
      <div
        data-src={img1}
        className="relative font-semibold left-0 right-0 w-full h-full align-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
      >
        <div className="relative text-left ml-10 top-1/4 z-10 text-slate-100">
          <h1 className="text-2xl lg:text-6xl my-4">
            We Fight For Your Justice <br />
            As Like A Friend
          </h1>
          <p className="text-md">
            Law is commonly understood as a system of rules that are <br />
            created and enforced through social or government.
          </p>
          <button class="btn btn-primary bg-primary rounded-none px-10 py-3 my-3">
            <Link to="/contact"> Get Consultation</Link>
          </button>
        </div>
      </div>
      <div
        data-src={img2}
        className="relative font-semibold left-0 right-0 w-full h-full align-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
      >
        <div className="relative text-left ml-10 top-1/4 z-10 text-slate-100">
          <h1 className="text-2xl lg:text-6xl my-4">
            Working Tirelessly <br />
            Toward Successful
          </h1>
          <p className="text-md">
            If you have been charged with a criminal offense in Lawgrid, <br />
            you need legal advice. Our legal team has defended thousands of criminal
            cases.
          </p>
          <button class="btn btn-primary bg-primary rounded-none px-10 py-3 my-3">
            <Link to="/contact"> Get Consultation</Link>
          </button>
        </div>
      </div>
      <div
        data-src={img3}
        className="relative font-semibold left-0 right-0 w-full h-full align-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
      >
        <div className="relative text-left ml-10 top-1/4 z-10 text-slate-100">
          <h1 className="text-2xl lg:text-6xl my-4">
            Lawgrid Criminal
            <br /> Defense Lawyers
          </h1>
          <p className="text-md">
            If you have been charged with a criminal offence in Lawgrid, you need legal{" "}
            <br />
            advice. Our legal team has defended thousands of criminal cases.
          </p>
          <button class="btn btn-primary bg-primary rounded-none px-10 py-3 my-3">
            <Link to="/contact"> Get Consultation</Link>
          </button>
        </div>
      </div>
      <div
        data-src={img4}
        className="relative font-semibold left-0 right-0 w-full h-full align-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
      >
        <div className="relative text-left ml-10 top-1/4 z-10 text-slate-100">
          <h1 className="text-2xl lg:text-6xl my-4">
            Toughest Defense Lawyers <br />
            for Your Money
          </h1>
          <p className="text-md">
            Our lawyers will also represent you in civil litigation
            <br /> cases such as divorce, child and spouse maintenance.
          </p>
          <button class="btn btn-primary bg-primary rounded-none px-10 py-3 my-3">
            <Link to="/contact"> Get Consultation</Link>
          </button>
        </div>
      </div>

      <div className="mx-auto "></div>
    </AwesomeSlider>
  );
};

export default HomeSlider;
