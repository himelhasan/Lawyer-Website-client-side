import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import innerBanner from "../../Media/slider-02.png";
import pagebg from "../../Media/practice-area.png";
import reviewbg from "../../Media/column-2.jpg";
import TestimonialsCard from "../Shared/TestimonialsCard/TestimonialsCard";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ServiceSingle = () => {
  const { _id, image, price, serviceName, description } = useLoaderData();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  console.log(user);

  const [reviews, setReviews] = useState({});
  useEffect(() => {
    fetch(`https://n-sage-ten.vercel.app/reviews?serviceId=${_id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  const handelSubmitReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName || "anonymous";
    const email = user?.email || "anonymous";
    const rating = form.reviewRange.value;
    const review = form.review.value;
    console.log(rating, review, email);

    const newReview = {
      given_review: review,
      rating: rating,
      userImage: user.photoURL,
      userName: name,
      userEmail: email,
      serviceId: _id,
    };

    fetch("https://n-sage-ten.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Rated Successfully!");
          form.reset();
          const newReviews = [...reviews, newReview];
          setReviews(newReviews);
        }

        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div
        className="bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${image})` }}
      >
        <Toaster />
        <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue px-5">
          <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <h1 className=" text-5xl font-bold text-primary-golden">{serviceName}</h1>
          </div>
        </div>
      </div>
      <div
        className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-24 pb-40 flex flex-col-reverse px-5 lg:flex-row  bg-bottom-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${pagebg})` }}
      >
        {/* inside content */}

        <div className="w-full lg:w-1/4 mr-4">
          <div className="p-10 rounded-sm bg-primary-golden m-5 text-center text-white  items-center  flex flex-col ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <div className="w-full lg:w-3/4">
          <h1 className=" text-3xl font-bold text-primary-blue pb-5">
            We are the best {serviceName} Lawyers
          </h1>

          <p>{description}</p>
        </div>
      </div>

      <section className="text-white bg-primary-golden ">
        <div className="flex flex-col items-stretch justify-between px-4 py-20 mx-auto max-w-7xl lg:flex-row sm:items-center">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-left sm:text-2xl sm:text-center lg:text-left">
              Contact Us to Learn More about Your Rights Following an {serviceName}
            </h2>
            <p className="mb-6 text-lg font-normal text-left text-gray-200 sm:text-xl lg:mb-0 sm:text-center lg:text-left">
              Let us help you!
            </p>
          </div>
          <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <a href="#" className="w-full btn btn-light btn-lg sm:w-auto">
              Call Now
            </a>
            <a href="#" className="w-full btn btn-outline-light btn-lg sm:w-auto">
              Book a Meeting
            </a>
          </div>
        </div>
      </section>
      <div
        className="bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${reviewbg})` }}
      >
        <div
          className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-24  bg-bottom-center bg-cover bg-no-repeat text-center"
          // style={{ backgroundImage: `url(${pagebg})` }}
        >
          <h1 className="text-5xl font-bold text-primary-blue py-2">Clients Reviews</h1>
          <p className="text-2xl font-semibold text-primary-blue pb-12">
            What Our Clients Say About Us
          </p>
          <div className="block md:flex">
            <div className="w-full md:w-2/3 px-10">
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {reviews.length >= 1 ? (
                  reviews.map((review) => (
                    <TestimonialsCard review={review}></TestimonialsCard>
                  ))
                ) : (
                  <p>No Reviews Found</p>
                )}
              </div>
            </div>

            {user ? (
              <div className="w-full md:w-1/3  px-10 flex flex-row ">
                <form className="w-full mx-auto text-left" onSubmit={handelSubmitReview}>
                  <label className="block text-sm mb-1 mt-4" for="name">
                    Your Name
                  </label>
                  <input
                    className="form-input"
                    defaultValue={user?.displayName}
                    id="name"
                    name="name"
                    readOnly
                  />

                  <label className="block text-sm mb-1 mt-4">Your Email</label>
                  <input
                    className="form-input "
                    defaultValue={user?.email}
                    id="email"
                    name="email"
                    readOnly
                  />

                  <label className="block text-sm mb-1 mt-4">Rate us</label>
                  <input
                    type="range"
                    className="form-input border-none "
                    id="reviewRange"
                    name="reviewRange"
                    min="1"
                    max="5"
                  />

                  <label className="block text-sm mb-1 mt-4" for="story">
                    Share us your feedback
                  </label>
                  <textarea
                    className="form-input "
                    id="review"
                    name="review"
                    placeholder="Use this to write your next great novel"
                    rows="3"
                  ></textarea>

                  <input
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                    value="Share your Review"
                  />
                </form>
              </div>
            ) : (
              <>
                <div className="w-full md:w-1/3  p-10">
                  <p className="text-muted capitalize text-md ">
                    Please login to share feedback
                  </p>{" "}
                  <Link
                    to="/login"
                    className="btn btn-primary bg-primary-golden w-full mt-4"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSingle;
