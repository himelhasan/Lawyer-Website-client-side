import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import logoBlack from "../../../Media/logo/logo-black.png";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const signOut = () => {
    logout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-primary-blue">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-primary-blue sticky z-20">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={logoBlack} style={{ width: "200px" }} alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/about"
                className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
              >
                Contact us
              </Link>
            </li>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      title={user.displayName}
                      alt={user?.displayName}
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://placeimg.com/80/80/people"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="justify-between">
                      {user?.displayName ? user?.displayName : "Profile"}
                    </Link>
                  </li>

                  <li>
                    <button onClick={signOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <ul className="flex items-center lg:flex">
                <li>
                  <Link
                    to="/login"
                    className="font-medium tracking-wide text-primary-golden transition duration-200 rounded "
                    aria-label="Login"
                    title="Login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-primary-blue border border-primary-golden rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center justify-center"
                      >
                        <img src={logoBlack} style={{ width: "40%" }} alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-primary-golden" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    {/* mobile */}
                    <ul className="space-y-4 text-center">
                      <li>
                        <Link
                          to="/about"
                          className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/allcourses"
                          className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="font-medium tracking-wide  text-primary-golden transition-colors duration-200 hover:text-white"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
