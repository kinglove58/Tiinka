import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

const Locations = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm mx-auto w-full">
      <h2 className="text-2xl font-bold text-center mb-6">
        Tinka Health Services – Locations & Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-20 py-2 text-center">
        <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1 max-w-md">
          <h3 className="text-lg font-semibold">Maryland (MD)</h3>
          <p>5457 Twin Knolls Road, Suite 300</p>
          <p>Columbia, MD 21045</p>
          <p>
            <FaPhoneAlt className="inline text-blue-300 mr-2" />
            <a
              href="tel:+14432956600"
              className="hover:text-gray-300 hover:underline"
            >
              +1 443-295-6600
            </a>
          </p>
        </div>
        <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1 max-w-md">
          <h3 className="text-lg font-semibold">Virginia (VA)</h3>
          <p>585 Grove St, Suite 145</p>
          <p>Herndon, VA 20170</p>
          <p>
            <FaPhoneAlt className="inline text-blue-300 mr-2" />
            <a
              href="tel:+15713498285"
              className="hover:text-gray-300 hover:underline"
            >
              +1 571-349-8285
            </a>
          </p>
        </div>
        <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1 max-w-md">
          <h3 className="text-lg font-semibold">Washington, DC</h3>
          <p>4315 50th Street NW, Suite 100</p>
          <p>Washington, DC 20016</p>
          <p>
            <FaPhoneAlt className="inline text-blue-300 mr-2" />
            <a
              href="tel:+12029334300"
              className="hover:text-gray-300 hover:underline"
            >
              +1 202-933-4300
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
