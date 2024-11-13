import React, { useState, memo } from "react";

const faqData = [
  {
    category: "Scheduling & Appointments",
    items: [
      {
        question: "What is included in medication management?",
        answer:
          "Our practice offers medication management services to support your mental health journey.",
      },
      {
        question: "Who do you provide treatment for?",
        answer:
          "We provide treatment to clients aged 12 and older who are located in Maryland and Virginia.",
      },
      {
        question: "Do you provide crisis management services?",
        answer:
          "No, we do not provide crisis management services. In an emergency, please dial 911 or visit the nearest emergency department.",
      },
    ],
  },
  {
    category: "Cancellation Policy",
    items: [
      {
        question: "What is the cancellation or no-show policy?",
        answer:
          "Cancellations or rescheduling requests must be made at least 24 hours in advance. A $100/$150 fee applies for late cancellations or no-shows.",
      },
      {
        question: "Are same-day reschedules allowed?",
        answer:
          "Yes, as long as you schedule a new appointment that day within the next two weeks.",
      },
    ],
  },
  {
    category: "Medication Policy",
    items: [
      {
        question: "How are medication refills managed?",
        answer:
          "Requests for refills should be made during scheduled visits. For valid cancellations, a bridge refill may be provided as a one-time courtesy.",
      },
      {
        question: "What is the recommended frequency of visits?",
        answer:
          "The frequency of visits depends on your needs and will be determined collaboratively with your provider.",
      },
    ],
  },
  {
    category: "Privacy & Confidentiality",
    items: [
      {
        question: "What are my rights regarding healthcare information?",
        answer:
          "You have rights to access, amend, restrict, and request confidential communication regarding your healthcare information.",
      },
      {
        question: "How is substance use information protected?",
        answer:
          "We comply with federal laws to protect substance use-related information, including 42 CFR Part 2.",
      },
    ],
  },
];

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setActiveQuestion(null); // Reset active question when category changes
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif">
          Frequently Asked Questions
        </h2>

        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h3
              className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 cursor-pointer font-serif"
              onClick={() => toggleCategory(catIndex)}
            >
              {category.category}
            </h3>
            {activeCategory === catIndex && (
              <div className="space-y-4">
                {category.items.map((faq, faqIndex) => (
                  <div
                    key={faqIndex}
                    className="border p-4 rounded-lg shadow-sm"
                  >
                    <h4
                      className="font-semibold cursor-pointer font-serif"
                      onClick={() => toggleQuestion(faqIndex)}
                    >
                      {faq.question}
                    </h4>
                    {activeQuestion === faqIndex && (
                      <p className="mt-2 text-gray-600 font-sans">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FAQs);
