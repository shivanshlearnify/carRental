import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Nopage from "./pages/nopage/Nopage.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import App from "./App.jsx"
import About from "./pages/about/About.jsx";
import TestimonialPage from "./pages/testimonial/TestimonialPage.jsx";
import Vehicle from "./pages/vehicle/Vehicle.jsx";
import Ourteam from "./pages/ourTeam/Ourteam.jsx";
import Contact from "./pages/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/testimonial",
        element: <TestimonialPage />,
      },
      {
        path: "/vechilemodels",
        element: <Vehicle />,
      },
      {
        path: "/ourteam",
        element: <Ourteam />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <Nopage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
