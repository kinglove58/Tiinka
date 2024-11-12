import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogProvider } from "./components/BlogContext";

// Lazy load the components
const Home = lazy(() => import("./pages/home/Home.jsx"));
const AboutUs = lazy(() => import("./pages/aboutus/AboutUs.jsx"));
const Policy = lazy(() => import("./pages/Policy/Policy.jsx"));
const ContactUs = lazy(() => import("./pages/contact/ContactUs.jsx"));
const SingleService = lazy(() => import("./pages/services/SingleService.jsx"));
const SingleBlog = lazy(() => import("./pages/blogs/SingleBlog.jsx"));
const AllBlogs = lazy(() => import("./pages/blogs/AllBlogs.jsx"));
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
        path: "/blogs/:id",
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
