import React, { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import { FaSpinner } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Lazy load the Testimonial component
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
    therapyReason: "",
    challengeDuration: "",
    priorExperience: "",
    motivation: "",
    date1: new Date(),
    date2: new Date(),
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.phone) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    // Map formData to the expected parameter names
    const payload = {
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      therapy: formData.therapyReason,
      challenges: formData.challengeDuration,
      experience: formData.priorExperience,
      message: `Motivation: ${
        formData.motivation
      }, Preferred Dates: ${formData.date1.toLocaleDateString()} and ${formData.date2.toLocaleDateString()}`,
    };

    fetch("https://api.tinkahealthservices.com/api/send_mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage("Your appointment request has been sent successfully!");
        setLoading(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          therapyReason: "",
          challengeDuration: "",
          priorExperience: "",
          motivation: "",
          date1: new Date(),
          date2: new Date(),
        });
      })
      .catch((error) => {
        setMessage(
          "There was an error sending your request. Please try again."
        );
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Contact Us - Tinka Health Services</title>
        <meta
          name="description"
          content="Contact Tinka Health Services to book an appointment or ask any questions you may have."
        />
        <meta
          name="keywords"
          content="contact, appointment, Tinka Health Services, health services"
        />
        <link rel="canonical" href="https://tinkahealthservices.com/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tinka Health Services",
              "url": "https://tinkahealthservices.com",
              "logo": "https://tinkahealthservices.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.facebook.com/tinkahealthservices",
                "https://www.twitter.com/tinkahealthservices",
                "https://www.instagram.com/tinkahealthservices"
              ]
            }
          `}
        </script>
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
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full"
        >
          <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
          <FormField
            label="Your Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className="mb-4">
            <label className="block text-gray-700">Your Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handlePhoneChange}
              defaultCountry="US"
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
            label="What brings you to seek therapy at this time?"
            name="therapyReason"
            value={formData.therapyReason}
            onChange={handleChange}
            type="textarea"
          />
          <FormField
            label="How long have you been experiencing these challenges?"
            name="challengeDuration"
            value={formData.challengeDuration}
            onChange={handleChange}
            type="textarea"
          />
          <FormField
            label="Have you had any prior experience with therapy or other support?"
            name="priorExperience"
            value={formData.priorExperience}
            onChange={handleChange}
            type="textarea"
          />
          <FormField
            label="On a scale of 1 to 10, how motivated are you to work on these goals?"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            type="number"
            min="1"
            max="10"
          />
          <div className="mb-4">
            <label className="block text-gray-700">
              Pick two convenient dates
            </label>
            <div className="flex space-x-4">
              <DatePicker
                selected={formData.date1}
                onChange={(date) => handleDateChange(date, "date1")}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
              <DatePicker
                selected={formData.date2}
                onChange={(date) => handleDateChange(date, "date2")}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
          </div>
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
          {message && <p className="mt-4 text-green-500">{message}</p>}
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
