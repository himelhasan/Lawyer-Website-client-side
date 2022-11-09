import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import innerBanner from "../../Media/r44_2_landing_page_photo_4.jpg";

const Register = () => {
  const { registerWithEmail, modifyProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });

  const [err, setErr] = useState({
    email: "",
    pass: "",
    confirmPass: "",
    general: "",
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handelYourNameChange = (e) => {
    // console.log(e.target.value);
    setFullName(e.target.value);
    setUserInfo({ ...userInfo, displayName: e.target.value });
  };

  const handelPhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
    setUserInfo({ ...userInfo, photoURL: e.target.value });
  };

  const handelEmailChange = (e) => {
    // console.log(e.target.value);
    const inputEmail = e.target.value;
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        inputEmail
      )
    ) {
      setErr({ ...err, email: "Please Provide a valid email" });
      return;
    }
    setErr({ ...err, email: "" });
    setEmail(inputEmail);
    setUserInfo({ ...userInfo, email: inputEmail });
  };
  const handelPasswordChange = (e) => {
    const inputPassword = e.target.value;
    const eightDigit = !/.{8}/.test(inputPassword);
    const oneDigit = !/^(?=.*\d)/.test(inputPassword);
    const uppercase = !/(?=.*[A-Z])/.test(inputPassword);
    const lowercase = !/(?=.*[a-z])/.test(inputPassword);
    const specialCharacter = !/(?=.*[!@#$%^&*()\-__+,./;:"'|])/.test(inputPassword);

    if (oneDigit) {
      setErr({ ...err, pass: "Please Provide At least one digit" });
      return;
    }

    if (specialCharacter) {
      setErr({ ...err, pass: "Please Provide At least one special character " });
      return;
    }
    if (uppercase) {
      setErr({ ...err, pass: "Please Provide At least one uppercase character " });
      return;
    }
    if (lowercase) {
      setErr({ ...err, pass: "Please Provide At least one lowercase character " });
      return;
    }

    if (eightDigit) {
      setErr({ ...err, pass: "Please Provide Minimum 8 characters" });
      return;
    }

    setErr({ ...err, pass: "" });
    setPassword(inputPassword);
    setUserInfo({ ...userInfo, password: inputPassword });
  };
  const handelPasswordConfirmationChange = (e) => {
    // console.log(e.target.value);
    const inputPassConfirmation = e.target.value;

    if (password === inputPassConfirmation) {
      setPasswordConfirmation(inputPassConfirmation);
      setErr({ ...err, confirmPass: "" });
    } else {
      setErr({ ...err, confirmPass: "Password dosent match" });
    }
  };

  const signUpWithEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    registerWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile(userInfo);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(error);
        setErr({ ...err, general: errorMessage });
        // ..
      });
  };

  const updateUserProfile = (userInfo) => {
    // console.log("displayName", userInfo.displayName);
    // updateUserProfileName();
    modifyProfile(userInfo)
      .then((res) => {
        // Profile updated!
        // ...
        // const profile = res.user;
        // console.log(res);
      })
      .catch((error) => {
        // console.log(error);
        setErr({ ...err, general: error });
        // An error occurred
        // ...
      });
  };

  return (
    <>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue ">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <h1 className=" text-5xl font-bold text-primary-golden">Register</h1>
            </div>
          </div>
        </div>
      </>

      <section className="bg-white">
        <div className="flex justify-center align-center items-center  ">
          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
                Register for your account
              </h1>

              <form onSubmit={signUpWithEmail} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 ">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>

                  <input
                    autoComplete="on"
                    onChange={handelYourNameChange}
                    type="text"
                    id="FirstName"
                    name="first_name"
                    required
                    className="px-5 py-2 border  mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 ">
                  <label className="block text-sm font-medium text-gray-700">Email</label>

                  <input
                    autoComplete="on"
                    onChange={handelEmailChange}
                    type="email"
                    id="Email"
                    name="email"
                    required
                    className="px-5 py-2 w-full border rounded mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-red-600">{err.email}</p>
                </div>
                <div className="col-span-6 ">
                  <label className="block text-sm font-medium text-gray-700">
                    Photo Url
                  </label>

                  <input
                    autoComplete="on"
                    onChange={handelPhotoUrlChange}
                    type="url"
                    id="PhotoUrl"
                    name="Photo_Url"
                    required
                    className="px-5 py-2 w-full border rounded mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    autoComplete="on"
                    onChange={handelPasswordChange}
                    type="password"
                    required
                    id="Password"
                    name="password"
                    className="px-5 py-2 w-full border rounded mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-red-600">{err.pass}</p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                  </label>

                  <input
                    autoComplete="on"
                    onChange={handelPasswordConfirmationChange}
                    type="password"
                    required
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="px-5 py-2 w-full border rounded mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  <p className="text-red-600">{err.confirmPass}</p>
                </div>

                <div className="col-span-6">
                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company
                    announcements.
                  </span>
                  <p className="text-red-600 pt-4">{err.general}</p>
                </div>

                <div className="col-span-6 ">
                  <button className="btn-icon btn-google btn bg-primary hover:bg-primary-blue rounded-none px-5 py-3 my-3 w-full">
                    Register Your Account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an Account?
                    <Link to="/login" className="text-gray-700 underline">
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Register;
