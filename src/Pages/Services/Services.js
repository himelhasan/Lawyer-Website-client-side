import React from "react";
import innerBanner from "../../Media/aoc-parallax-1.jpg";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const servicesData = useLoaderData();

  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue px-5">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <h1 className=" text-5xl font-bold text-primary-golden">Our Services</h1>
            </div>
          </div>
        </div>
      </>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {/* inside content */}

        {/* Dynamically course card will appear here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-32">
          {servicesData.map((service) => (
            <ServicesCard key={service._id} service={service}>
              {" "}
            </ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
