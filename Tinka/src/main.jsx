import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/aboutus/AboutUs.jsx";
import Policy from "./pages/Policy/Policy.jsx";
import ContactUs from "./pages/contact/ContactUs.jsx";
import SingleService from "./pages/services/SingleService.jsx";
import SingleBlog from "./pages/blogs/SingleBlog.jsx";
import AllBlogs from "./pages/blogs/AllBlogs.jsx";
import { BlogProvider } from "./components/BlogContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <AllBlogs />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services/:id",
        element: <SingleService />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <RouterProvider router={router} />
  </BlogProvider>
);
