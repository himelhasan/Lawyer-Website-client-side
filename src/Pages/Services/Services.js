import React from "react";
import innerBanner from "../../Media/aoc-parallax-1.jpg";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { useState } from "react";
import button from "kutty/src/button";
import { useEffect } from "react";
const Services = () => {
  // const { services, count } = useLoaderData();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [count, setCount] = useState(0);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://n-sage-ten.vercel.app/allservices?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setServices(data.services);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

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
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}>
              {" "}
            </ServicesCard>
          ))}
        </div>

        <div className="my-10 mx-auto flex w-1/2">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              className={page == number ? "btn btn-primary" : "btn"}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}

          <select class="form-select w-20" onChange={(e) => setSize(e.target.value)}>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Services;
