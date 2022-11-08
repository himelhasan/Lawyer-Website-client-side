import React from "react";
import innerBanner from "../../Media/r44_2_landing_page_photo_4.jpg";

const ServiceSingle = () => {
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32 pl-10 md:pl-24 lg:pl-44 bg-gradient-to-r from-primary-blue">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <h1 className=" text-5xl font-bold text-primary-golden">Contact us</h1>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ServiceSingle;
