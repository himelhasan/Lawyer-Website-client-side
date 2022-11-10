import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import innerBanner from "../../Media/meeting-1.jpg";
import EditableTestimonialsCard from "../Shared/EditableTestimonialsCard/EditableTestimonialsCard";
import toast, { Toaster } from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`https://n-sage-ten.vercel.app/myReviews?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [user?.email]);

  // const [modifiedReviews, setModifiedReviews] = useState({ reviews });

  // console.log(modifiedReviews, "modifiedReviews");
  console.log(reviews);

  const handelDeleteReview = (review) => {
    const agree = window.confirm("Are you sure you want to delete  this review");
    if (agree) {
      fetch(`https://n-sage-ten.vercel.app/reviews/${review._id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            toast.success(`Successfully Deleted!`);
            const remainingReviews = reviews.filter((rvw) => rvw._id !== review._id);
            setReviews(remainingReviews);
          }
        })
        .catch((error) => console.log(error));

      //   toast.promise(saveSettings(settings), {
      //     loading: "Saving...",
      //     success: <b>Settings saved!</b>,
      //     error: <b>Could not save.</b>,
      //   });
    }
  };

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
            reviews.map((review) => (
              <EditableTestimonialsCard
                review={review}
                handelDeleteReview={handelDeleteReview}
              >
                {" "}
              </EditableTestimonialsCard>
            ))
          ) : (
            <p>No Reviews Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
