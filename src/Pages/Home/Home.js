import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../Services/ServicesCard";
import HomeSlider from "../Shared/Slider/HomeSlider";
import AboutUs from "../Shared/Aboutus/Aboutus";

const Home = () => {
  const services = useLoaderData();

  return (
    <>
      <HomeSlider></HomeSlider>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {/* inside content */}
        <h1 className="text-5xl font-bold text-primary-golden -mb-10 px-3">
          What Cases We Handle
        </h1>

        {/* Dynamically course card will appear here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}>
              {" "}
            </ServicesCard>
          ))}
        </div>

        <AboutUs></AboutUs>
      </div>
    </>
  );
};

export default Home;
