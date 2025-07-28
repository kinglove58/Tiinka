import React, { useState } from "react";
import { mentalDetailContent } from "../constant/mentaldetailcontent";
import BookingModal from "./BookingModal";
import BookingLink from "./BookingLink";

const MentalDetails = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-100 text-gray-800 w-full">
      {mentalDetailContent.map((section, idx) => (
        <section
          key={idx}
          className={`max-w-6xl mx-auto py-6 px-4 md:px-6 mb-5 rounded-xl shadow-sm bg-gradient-to-br from-white/90 via-gray-100/80 to-blue-50/60 flex flex-col md:grid md:grid-cols-2 gap-8 items-center`}
        >
          {/* Text Left, Image Right or reversed */}
          {section.reverse ? (
            <>
              {section.image && (
                <div className="flex items-center justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-500 w-500 md:h-800 md:w-800 object-cover rounded-3xl shadow-md"
                  />
                </div>
              )}
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-lg mb-2">{section.subtitle}</p>
                )}
                {section.text &&
                  (Array.isArray(section.text) ? (
                    section.text.map((t, i) => (
                      <p key={i} className="mb-2">
                        {t}
                      </p>
                    ))
                  ) : (
                    <p>{section.text}</p>
                  ))}
                {section.list && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.list.map((listCol, colIdx) => (
                      <ul key={colIdx} className="list-disc pl-5 space-y-2">
                        {listCol.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
                {section.actions && (
                  <div className="space-x-4 mt-4">
                    {section.actions.map((action, i) => (
                      <BookingLink
                        key={i}
                        className={
                          action.type === "primary"
                            ? "bg-blue-600 text-white px-6 py-2 rounded-xl shadow"
                            : "border border-blue-600 text-blue-600 px-6 py-2 rounded-xl shadow"
                        }
                      >
                        {action.label}
                      </BookingLink>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-lg mb-2">{section.subtitle}</p>
                )}
                {section.text &&
                  (Array.isArray(section.text) ? (
                    section.text.map((t, i) => (
                      <p key={i} className="mb-2">
                        {t}
                      </p>
                    ))
                  ) : (
                    <p>{section.text}</p>
                  ))}
                {section.list && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.list.map((listCol, colIdx) => (
                      <ul
                        key={colIdx}
                        className="list-disc pl-5 space-y-1 md:text-md"
                      >
                        {listCol.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
                {section.actions && (
                  <div className="space-x-4 mt-4">
                    {section.actions.map((action, i) => (
                      <BookingLink
                        type="button"
                        aria-controls="booking-modal"
                        aria-expanded={showModal}
                        onClick={() => setShowModal(true)}
                        key={i}
                        className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow"
                      >
                        {action.label}
                      </BookingLink>
                    ))}
                  </div>
                )}
              </div>
              {section.image && (
                <div className="flex items-center justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-500 w-500 md:h-800 md:w-800 object-cover rounded-3xl shadow-md"
                  />
                </div>
              )}
            </>
          )}
        </section>
      ))}
    </div>
  );
};

export default MentalDetails;
