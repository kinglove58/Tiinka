import { useState, memo } from "react";
import BookingModal from "../../components/BookingModal"; // ✅ Import modal

const EasyStart = () => {
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  return (
    <div className="bg-[#005ab0] text-white py-16 pb-4 px-6 font-sans mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-serif">
          Very Easy To get Started With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-full text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mt-4 font-serif">
              Filling the Appointment Form
            </h3>
            <p className="text-center mt-2">
              Answer a few questions to get started and book a convenient time
              with us. Be confident when sharing your thoughts and worries.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-full text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mt-4 font-serif">
              We reach out to you!
            </h3>
            <p className="text-center mt-2">
              Based on your information, we'll reach out to discuss the best
              approach for your needs, with a choice of budget plans to fit your
              lifestyle.
            </p>
          </div>
        </div>

        {/* ✅ Button to open modal */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-12 mb-0 px-6 py-3 bg-white text-blue-600 hover:scale-95 font-semibold rounded hover:bg-gray-200 transition duration-300"
        >
          Let's Do This
        </button>

        {/* ✅ Modal component */}
        <BookingModal show={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default memo(EasyStart);
