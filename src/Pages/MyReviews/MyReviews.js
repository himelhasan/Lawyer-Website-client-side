import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import innerBanner from "../../Media/meeting-1.jpg";
import TestimonialsCard from "../Shared/TestimonialsCard/TestimonialsCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`https://n-sage-ten.vercel.app/myReviews?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [user?.email]);

  console.log(reviews);
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue px-5">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <h1 className=" text-5xl font-bold text-primary-golden">My Reviews</h1>
            </div>
          </div>
        </div>
      </>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {/* inside content */}
        <h1 className=" text-3xl font-bold text-primary-golden pt-10 text-center text-primary-blue">
          My Total Reviews : {reviews.length}
        </h1>

        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* {reviews.map((review) => (
            <TestimonialsCard review={review}></TestimonialsCard>
          ))} */}

          {reviews.length >= 1 ? (
            reviews.map((review) => <TestimonialsCard review={review}></TestimonialsCard>)
          ) : (
            <p>No Reviews Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
