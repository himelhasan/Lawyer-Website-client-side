import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import innerBanner from "../../Media/titlebar-bg.jpg";

const AddaService = () => {
  const { user } = useContext(AuthContext);

  const handelAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName || "anonymous";
    const userEmail = user?.email || "anonymous";
    const serviceName = form.serviceName.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;
    // console.log(serviceName, description, price, image);

    const newService = {
      serviceName: serviceName,
      description: description,
      image: image,
      price: price,
      userEmail: userEmail,
    };

    fetch("https://n-sage-ten.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Rated Successfully!");
          form.reset();
        }

        console.log(data);
      })
      .catch((err) => console.error(err));
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
              <h1 className=" text-5xl font-bold text-primary-golden">
                Add a New Service
              </h1>
            </div>
          </div>
        </div>
      </>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {/* inside content */}
        <div className="p-10 w-full md:w-1/3 mx-auto">
          <form className="w-full mx-auto text-left" onSubmit={handelAddService}>
            <div className="flex gap-2">
              <div>
                <input
                  className="form-input"
                  defaultValue={user?.displayName}
                  id="name"
                  name="name"
                  readOnly
                />
              </div>

              <div>
                <input
                  className="form-input"
                  defaultValue={user?.email}
                  id="email"
                  name="email"
                  readOnly
                />
              </div>
            </div>

            <input
              className="form-input my-2"
              placeholder="Service Name"
              id="serviceName"
              name="serviceName"
              required
            />

            <input
              className="form-input my-2"
              placeholder="Service Image Link"
              id="image"
              name="image"
              required
            />

            <input
              type="number"
              className="form-input my-2"
              placeholder="Service Price"
              id="price"
              name="price"
              required
            />

            <textarea
              className="form-input"
              id="description"
              name="description"
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
      </div>
    </div>
  );
};

export default AddaService;
