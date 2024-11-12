import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaSpinner } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Testimonial from "../home/Testimonial";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "",
    number: "",
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

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateNumber = (number) => {
    const re = /^[0-9\b]+$/;
    return re.test(String(number));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (
      !validateNumber(formData.countryCode) ||
      !validateNumber(formData.number)
    ) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    // Map formData to the expected parameter names
    const payload = {
      name: formData.fullName,
      phone: `${formData.countryCode}${formData.number}`,
      email: formData.email,
      therapy: formData.therapyReason,
      challenges: formData.challengeDuration,
      experience: formData.priorExperience,
      message: `Motivation: ${
        formData.motivation
      }, Preferred Dates: ${formData.date1.toLocaleDateString()} and ${formData.date2.toLocaleDateString()}`,
    };

    fetch("http://localhost:8000/api/send_mail", {
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
          countryCode: "",
          number: "",
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
      <ScrollAnimationWrapper>
        <div className="bg-custom-image bg-cover bg-center h-64 flex items-center justify-center flex-col shadow-md">
          <h1 className="text-white text-3xl md:text-4xl font-bold font-serif">
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
          <div className="mb-4">
            <label className="block text-gray-700">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Phone Number</label>
            <div className="flex space-x-4">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                placeholder="+1"
                className="w-1/4 p-2 border border-gray-300 rounded mt-2"
                required
              />
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="1234567890"
                className="w-3/4 p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              What brings you to seek therapy at this time?
            </label>
            <textarea
              name="therapyReason"
              value={formData.therapyReason}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              How long have you been experiencing these challenges?
            </label>
            <textarea
              name="challengeDuration"
              value={formData.challengeDuration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Have you had any prior experience with therapy or other support?
            </label>
            <textarea
              name="priorExperience"
              value={formData.priorExperience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              On a scale of 1 to 10, how motivated are you to work on these
              goals?
            </label>
            <input
              type="number"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              min="1"
              max="10"
              required
            />
          </div>
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
              className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300 w-40" // Adjusted width
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin h-5 w-5 mx-auto" /> // Centered spinner
              ) : (
                "Submit"
              )}
            </button>
          </div>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
        <div className="mt-10">
          <Testimonial slidesToShow={2} />
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default ContactUs;
