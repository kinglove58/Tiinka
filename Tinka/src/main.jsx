import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogProvider } from "./BlogContext/BlogContext.jsx";
import Home from "../src/pages/home/Home.jsx";
import AboutUs from "./pages/aboutus/AboutUs.jsx";
import SingleBlog from "./pages/blogs/SingleBlog.jsx";
import AllBlogs from "./pages/blogs/AllBlogs.jsx";
import SingleService from "./pages/services/SingleService.jsx";
import ContactUs from "./pages/contact/ContactUs.jsx";

// Lazy load the components

const Policy = lazy(() => import("./pages/Policy/Policy.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

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
        path: "/blogs/:slug",
        element: <SingleBlog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </BlogProvider>
);
