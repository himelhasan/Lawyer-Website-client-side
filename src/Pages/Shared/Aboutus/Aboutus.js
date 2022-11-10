import React from "react";
import img1 from "../../../Media/meeting-1.jpg";
import img2 from "../../../Media/post-004-740x740.jpg";
const AboutUs = () => {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-primary-golden md:leading-tight sm:text-left md:text-4xl">
            How We Can Help
          </h2>
          <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Our experience and compassion guide us from initial consultation to the
            completion of your case. Our goal is to resolve your injury or negligence case
            successfully and quickly so you can resume your normal life as quickly as
            possible. Our knowledge and experience in the field of injury law allow us to
            offer you numerous solutions and options to resolve your case in the way you
            want.
          </p>
          <a
            href="#"
            class="w-full btn bg-primary-golden rounded-none btn-lg btn-dark sm:w-auto"
          >
            Learn More
          </a>
        </div>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          class="w-full h-full py-48 bg-gray-200 bg-center bg-cover bg-no-repeat "
        ></div>
      </div>
      <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div class="order-none md:order-2">
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-primary-golden md:leading-tight sm:text-left md:text-4xl">
            Why Choose Us
          </h2>
          <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Our experience and compassion guide us from the initial consultation to the
            completion of your case. Our goal is to resolve your injury or negligence case
            successfully and quickly so that you can resume your normal life as quickly as
            possible. Our knowledge and experience in the field of injury law allows us to
            offer you numerous solutions and options to resolve your case the way you
            want.
          </p>
          <a
            href="#"
            class="w-full btn bg-primary-golden rounded-none btn-lg btn-dark sm:w-auto"
          >
            Learn More
          </a>
        </div>
        <div
          style={{ backgroundImage: `url(${img2})` }}
          class="w-full h-full py-48 bg-gray-200 bg-center bg-cover bg-no-repeat "
        ></div>
      </div>
    </section>
  );
};

export default AboutUs;
