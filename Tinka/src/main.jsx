import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BlogProvider } from "./BlogContext/BlogContext.jsx";
import { seoTreatmentPages } from "./pages/seo/seoPagesData.js";

// Lazy load the components
const Home = lazy(() => import("./pages/home/Home.jsx"));
const AboutUs = lazy(() => import("./pages/aboutus/AboutUs.jsx"));
const MeetOurProvider = lazy(
  () => import("./pages/aboutus/MeetOurProvider.jsx"),
);
const PrimaryPreventiveCare = lazy(
  () => import("./pages/primary/PrimaryPreventiveCare.jsx"),
);
const SingleBlog = lazy(() => import("./pages/blogs/SingleBlog.jsx"));
const AllBlogs = lazy(() => import("./pages/blogs/AllBlogs.jsx"));
const SingleService = lazy(() => import("./pages/services/SingleService.jsx"));
const Services = lazy(() => import("./pages/services/Services.jsx"));
const ContactUs = lazy(() => import("./pages/contact/ContactUs.jsx"));
const Referral = lazy(() => import("./pages/referral/Referral.jsx"));
const SearchPage = lazy(() => import("./pages/search/SearchPage.jsx"));
const Conditions = lazy(() => import("./pages/conditions/Conditions.jsx"));
const ConditionDetail = lazy(
  () => import("./pages/conditions/ConditionDetail.jsx"),
);
const ConditionTopic = lazy(
  () => import("./pages/conditions/ConditionTopic.jsx"),
);
const TinkaBooking = lazy(
  () => import("./pages/booking/TinkaBookingEmbed.jsx"),
);

const Policy = lazy(() => import("./pages/Policy/Policy.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));
const InsuranceAccepted = lazy(
  () => import("./pages/insurance/InsuranceAccepted.jsx"),
);
const MarylandPsychiatrist = lazy(
  () => import("./pages/location/MarylandPsychiatrist.jsx"),
);
const DCPsychiatrist = lazy(
  () => import("./pages/location/DCPsychiatrist.jsx"),
);
const VirginiaPsychiatrist = lazy(
  () => import("./pages/location/VirginiaPsychiatrist.jsx"),
);
const HerndonPsychiatricProvider = lazy(
  () => import("./pages/location/HerndonPsychiatricProvider.jsx"),
);
const TelehealthPsychiatry = lazy(
  () => import("./pages/telehealth/TelehealthPsychiatry.jsx"),
);
const SeoTreatmentPage = lazy(() => import("./pages/seo/SeoTreatmentPage.jsx"));

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
        path: "/primary-preventive-care",
        element: <PrimaryPreventiveCare />,
      },
      {
        path: "/meet-our-provider",
        element: <MeetOurProvider />,
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
        path: "/referral",
        element: <Referral />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/conditions",
        element: <Conditions />,
      },
      {
        path: "/conditions/condition/:slug",
        element: <ConditionDetail />,
      },
      {
        path: "/:slug/default.htm",
        element: <ConditionDetail />,
      },
      {
        path: "/:slug/:topicSlug.htm",
        element: <ConditionTopic />,
      },
      {
        path: "/tinkahealthservicesbooking",
        element: <Navigate to="/booking" replace />,
      },
      {
        path: "/booking",
        element: <TinkaBooking />,
      },
      {
        path: "/insurance-we-accept",
        element: <InsuranceAccepted />,
      },
      {
        path: "/maryland-psychiatrist",
        element: <MarylandPsychiatrist />,
      },
      {
        path: "/dc-psychiatrist",
        element: <DCPsychiatrist />,
      },
      {
        path: "/virginia-psychiatrist",
        element: <VirginiaPsychiatrist />,
      },
      {
        path: "/psychiatric-provider-herndon-va",
        element: <HerndonPsychiatricProvider />,
      },
      {
        path: "/telehealth-psychiatry-md-dc-va",
        element: <TelehealthPsychiatry />,
      },
      ...seoTreatmentPages.map((page) => ({
        path: page.path,
        element: <SeoTreatmentPage pageId={page.id} />,
      })),
      {
        path: "/services",
        element: <Services />,
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
  </BlogProvider>,
);
