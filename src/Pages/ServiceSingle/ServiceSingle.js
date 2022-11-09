import React from "react";
import { useLoaderData } from "react-router-dom";
import innerBanner from "../../Media/slider-02.png";
import pagebg from "../../Media/practice-area.png";
import TestimonialsCard from "../Shared/TestimonialsCard/TestimonialsCard";

const ServiceSingle = () => {
  const { _id, image, all_review, price, reviews_rating, serviceName, description } =
    useLoaderData();

  return (
    <>
      <div
        className="bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${innerBanner})` }}
      >
        <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue ">
          <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <h1 className=" text-5xl font-bold text-primary-golden">{serviceName}</h1>
          </div>
        </div>
      </div>
      <div
        className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-24 pb-40 flex bg-bottom-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${pagebg})` }}
      >
        {/* inside content */}

        <div className="w-1/4 mr-4">
          <div className="p-10 rounded-sm bg-primary-golden m-5 text-center text-white  items-center  flex flex-col ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <h2 className="font-semibold text-xl py-2">Let's Talk</h2>
            <p>+(002) 0121-2843-661</p>
            <p>+(002) 0106-8710-594</p>
            <button className="btn-icon btn-google btn hover:bg-primary uppercase bg-primary-blue rounded-none px-5 py-3 my-3 w-full">
              Call us Now
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <h1 className=" text-3xl font-bold text-primary-blue pb-5">
            We are the best {serviceName} Lawyers
          </h1>

          <p>{description}</p>
        </div>
      </div>

      <section class="text-white bg-primary-golden ">
        <div class="flex flex-col items-stretch justify-between px-4 py-20 mx-auto max-w-7xl lg:flex-row sm:items-center">
          <div>
            <h2 class="mb-1 text-xl font-semibold text-left sm:text-2xl sm:text-center lg:text-left">
              Contact Us to Learn More about Your Rights Following an {serviceName}
            </h2>
            <p class="mb-6 text-lg font-normal text-left text-gray-200 sm:text-xl lg:mb-0 sm:text-center lg:text-left">
              Let us help you!
            </p>
          </div>
          <div class="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <a href="#" class="w-full btn btn-light btn-lg sm:w-auto">
              Call Now
            </a>
            <a href="#" class="w-full btn btn-outline-light btn-lg sm:w-auto">
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      <div
        className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-24  bg-bottom-center bg-cover bg-no-repeat text-center"
        // style={{ backgroundImage: `url(${pagebg})` }}
      >
        <h1 className="text-5xl font-bold text-primary-blue py-2">Clients Reviews</h1>
        <p className="text-2xl font-semibold text-primary-blue">
          What Our Clients Say About Us
        </p>
        <div className="grid grid-cols-2">
          <TestimonialsCard></TestimonialsCard>
        </div>
      </div>
    </>
  );
};

export default ServiceSingle;
