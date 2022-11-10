import React from "react";
import innerBanner from "../../Media/r44_2_landing_page_photo_4.jpg";

const Blog = () => {
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue px-5">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <h1 className=" text-5xl font-bold text-primary-golden">Latest Blogs</h1>
            </div>
          </div>
        </div>
      </>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
          <h1 class="mb-12 text-xl font-bold text-left md:text-3xl md:text-center">
            Recent Updates
          </h1>
          <div class="flex items-start justify-start mb-12">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <p class="mt-0 mb-3 font-semibold text-gray-900">
                What is the difference between SQL and NoSQL ??
              </p>
              <p class="text-gray-600">
                SQL is the programming language used to interface with relational
                databases. (Relational databases model data as records in rows and tables
                with logical links between them). NoSQL is a class of DBMs that are
                non-relational and generally do not use SQL.
              </p>
            </div>
          </div>
          <div class="flex items-start justify-start mb-12">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <p class="mt-0 mb-3 font-semibold text-gray-900">
                What is JWT, and how does it work?
              </p>
              <p class="text-gray-600">
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact
                and self-contained way for securely transmitting information between
                parties as a JSON object. This information can be verified and trusted
                because it is digitally signed.
              </p>
            </div>
          </div>
          <div class="flex items-start justify-start mb-12">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <p class="mt-0 mb-3 font-semibold text-gray-900">
                What is the difference between javascript and NodeJS?
              </p>
              <p class="text-gray-600">
                JavaScript is a simple programming language that can be used with any
                browser that has the JavaScript Engine installed. Node. js, on the other
                hand, is an interpreter or execution environment for the JavaScript
                programming language.
              </p>
            </div>
          </div>
          <div class="flex items-start justify-start mb-12">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="flex-none w-6 h-6 mr-4 text-gray-700"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <p class="mt-0 mb-3 font-semibold text-gray-900">
                How does NodeJS handle multiple requests at the same time?
              </p>
              <p class="text-gray-600">
                NodeJS receives multiple client requests and places them into EventQueue.
                NodeJS is built with the concept of event-driven architecture. NodeJS has
                its own EventLoop which is an infinite loop that receives requests and
                processes them
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
