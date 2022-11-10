import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, image, all_review, price, reviews_rating, serviceName, description } =
    service;
  return (
    <Link to={`/services/${_id}`} className="relative bg-white m-2 flex flex-col   my-24">
      <div
        className="bg-gray-400  text-gray-900 bg-center bg-cover bg-no-repeat pt-64"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full">
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mt-1 text-xl font-semibold">{serviceName}</h4>
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
