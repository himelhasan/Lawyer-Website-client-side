import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import ServiceSingle from "../Pages/ServiceSingle/ServiceSingle";
import PrivateRouter from "./PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },

      {
        path: "/myreviews/",
        element: (
          <PrivateRouter>
            <MyReviews></MyReviews>
          </PrivateRouter>
        ),
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
      {
        path: "/services",
        loader: () => {
          return fetch(`https://n-sage-ten.vercel.app/services`);
        },
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) => {
          return fetch(`https://n-sage-ten.vercel.app/services/${params.id}`);
        },
        element: <ServiceSingle />,
      },

      { path: "/about", element: <About></About> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

export default routes;
// https://n-sage-ten.vercel.app/services
