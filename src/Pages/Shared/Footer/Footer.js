import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../../../Media/logo/logo-black.png";

const Footer = () => {
  return (
    <div className="bg-primary-blue">
      <footer class="px-4 py-12 mx-auto max-w-7xl bg-primary-blue">
        <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <div class="col-span-3">
            <Link to="/" title="Go to Home Page">
              <img src={logofooter} alt="" />
              <span class="sr-only">Kutty Home Page</span>
            </Link>
          </div>
          <nav class="col-span-1 md:col-span-1 lg:col-span-2">
            <p class="mb-3 text-xs font-bold tracking-wider text-primary-golden uppercase">
              Product
            </p>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Features
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Integrations
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Documentation
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              FAQs
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Pricing
            </a>
          </nav>
          <nav class="col-span-1 md:col-span-1 lg:col-span-2">
            <p class="mb-3 text-xs font-semibold tracking-wider text-primary-golden uppercase">
              About
            </p>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Press-Kit
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Company
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Blog
            </a>
          </nav>
          <nav class="col-span-2 md:col-span-1 lg:col-span-2">
            <p class="mb-3 text-xs font-semibold tracking-wider text-primary-golden uppercase">
              Contact
            </p>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Twitter
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Email
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Advertising
            </a>
            <a
              href="#"
              class="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary"
            >
              Chat
            </a>
          </nav>
          <div class="col-span-3">
            <p class="mb-3 text-xs font-semibold tracking-wider text-primary-golden uppercase">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <form action="#" class="mb-2">
              <div class="form-append">
                <input
                  class="form-input form-input-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button class="btn btn-primary btn-sm" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p class="text-xs leading-normal text-gray-500">
              Get lessons and insights on how to enrich your law knowledge.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p class="mb-6 text-sm text-left text-slate-400 md:mb-0">
            © Copyright 2023 CodersCrown. All Rights Reserved.
          </p>
          <div class="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a href="#" class="text-sm text-slate-400 transition hover:text-primary">
              Terms
            </a>
            <a href="#" class="text-sm text-slate-400 transition hover:text-primary">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
