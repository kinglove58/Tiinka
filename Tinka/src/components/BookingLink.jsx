import { Link } from "react-router-dom";

const BookingLink = ({ className = "", children = "Book an Appointment" }) => {
  return (
    <Link
      to="/tinkahealthservicesbooking"
      className={`inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold ${className}`}
    >
      {children}
    </Link>
  );
};

export default BookingLink;
