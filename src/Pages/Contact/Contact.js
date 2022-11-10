import React from "react";
import { Link } from "react-router-dom";
import innerBanner from "../../Media/slider-01.png";
import innerSection from "../../Media/contact-us.png";

const Contact = () => {
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue px-5">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <h1 className=" text-5xl font-bold text-primary-golden">Contact us</h1>
            </div>
          </div>
        </div>
      </>

      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Have questions? The quickest way to get in touch with us is using the
                contact information below.
              </p>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary-golden focus:ring-2 focus:ring-primary-golden text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary-golden focus:ring-2 focus:ring-primary-golden text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary-golden focus:ring-2 focus:ring-primary-golden h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-primary-golden text-uppercase font-semibold flex justify-center gap-2 bg-primary-blue border-0 py-2 px-6 focus:outline-none hover:bg-primary-golden hover:text-primary-blue rounded text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
                Get a Free Call
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-1/2  p-10 flex items-center justify-start relative">
              <img src={innerSection} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
