import { useEffect } from "react";
import PropTypes from "prop-types";

const BookingModal = ({ show }) => {
  useEffect(() => {
    if (show) {
      window.location.assign("/booking");
    }
  }, [show]);

  return null;
};

BookingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default BookingModal;
