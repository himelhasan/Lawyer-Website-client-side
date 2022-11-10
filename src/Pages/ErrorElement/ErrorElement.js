import React from "react";
import { Link } from "react-router-dom";
import innerBanner from "../../Media/column-bg2.png";

const ErrorElement = () => {
  console.log();
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Error 404
          </p>
          <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p class="mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to="/"
            class="w-full mb-2 btn btn-lg bg-primary-golden rounded-none sm:w-auto sm:mb-0"
          >
            Back to homepage
          </Link>
          <Link to="/contact" class="w-full mb-2 btn btn-lg btn-white sm:w-auto sm:mb-0">
            Contact us
          </Link>
        </div>
        <div>
          <div
            class="w-full h-full py-48  rounded-lg bg-center bg-contain bg-no-repeat "
            style={{ backgroundImage: `url(${innerBanner})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ErrorElement;
