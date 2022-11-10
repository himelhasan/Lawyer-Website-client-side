import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../../../Media/logo/logo-black.png";
import pagebg from "../../../Media/footer-bg-1.jpg";

const Footer = () => {
  return (
    <div className="bg-primary-blue" style={{ backgroundImage: `url(${pagebg})` }}>
      <footer className="px-4 py-12 mx-auto max-w-7xl ">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-3">
            <Link to="/" title="Go to Home Page">
              <img src={logofooter} alt="" />
            </Link>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-bold tracking-wider text-primary-golden uppercase">
              Product
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Features
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Integrations
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Documentation
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              FAQs
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Pricing
            </a>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-primary-golden uppercase">
              About
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Press-Kit
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Company
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Privacy
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Blog
            </a>
          </nav>
          <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-primary-golden uppercase">
              Contact
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Twitter
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Instagram
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Email
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Advertising
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-normal text-slate-100 transition md:mb-2 hover:text-primary-golden"
            >
              Chat
            </a>
          </nav>
          <div className="col-span-3">
            <p className="mb-3 text-xs font-semibold tracking-wider text-primary-golden uppercase">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <form action="#" className="mb-2">
              <div className="form-append">
                <input
                  className="form-input form-input-sm rounded-none py-3"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary btn-sm rounded-none" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs leading-normal text-gray-500">
              Get lessons and insights on how to enrich your law knowledge.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-6 text-sm text-left text-slate-400 md:mb-0">
            © Copyright 2023 CodersCrown. All Rights Reserved.
          </p>
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-primary-golden"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-primary-golden"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
