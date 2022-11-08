import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, image, all_review, price, reviews_rating, serviceName, description } =
    service;
  return (
    <Link
      to={`/services/${_id}`}
      className="relative bg-white m-2 flex flex-col  justify-between border border-gray-200 my-24"
    >
      <span className=" bg-primary-golden text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide absolute top-5 right-5 px-5 py-1">
        {reviews_rating} star ratings
      </span>
      <div
        className="wrapper bg-gray-400 antialiased text-gray-900 bg-center bg-cover bg-no-repeat pt-64"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full">
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-semibold  leading-tight truncate">
                {serviceName}
              </h4>

              <div className="mt-1">{description.slice(0, 100)}...</div>
              <div className="mt-4">
                <p className="text-primary text-md font-semibold">${price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServicesCard;
