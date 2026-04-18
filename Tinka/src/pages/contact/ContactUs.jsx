import React, { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { FaSpinner } from "react-icons/fa";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";

const Testimonial = lazy(() => import("../home/Testimonial"));

const FormField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = true,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded mt-2"
        required={required}
      ></textarea>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded mt-2"
        required={required}
      />
    )}
  </div>
);

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    Message: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Contact Us - Tinka Health Services</title>
        <meta
          name="description"
          content="Contact Tinka Health Services to book an appointment or ask any questions you may have."
        />
        <link rel="canonical" href="https://tinkahealthservices.com/contact" />
      </Helmet>
      <ScrollAnimationWrapper>
        <div className="bg-custom-image bg-cover bg-center h-64 flex items-center justify-center flex-col shadow-md">
          <h1 className="text-white text-2xl md:text-4xl font-bold font-serif">
            You deserve to be happy
          </h1>
          <p className="font-sans text-white text-xl md:text-2xl font-semibold">
            And we are here to Help You
          </p>
        </div>

        {/* ✅ Contact Form with Formspree */}
        <form
          action="https://formspree.io/f/xzzaoopr"
          method="POST"
          className="bg-white p-8 rounded-lg shadow-md w-full"
        >
          <h2 className="text-2xl font-bold mb-4">We like to hear from You!</h2>

          <FormField
            label="Your Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <div className="mb-4">
            <label className="block text-gray-700">Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <FormField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />

          <FormField
            label="Reason for reaching out"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            type="textarea"
          />

          {/* Hidden fields for Formspree */}
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Submission - Tinka Health Services"
          />
          <input type="hidden" name="_replyto" value={formData.email} />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300 w-40"
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin h-5 w-5 mx-auto" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>

        <div className="mt-10">
          <Suspense fallback={<div>Loading...</div>}>
            <Testimonial slidesToShow={2} />
          </Suspense>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default ContactUs;
