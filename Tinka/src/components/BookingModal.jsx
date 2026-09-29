import { useEffect } from "react";
import PropTypes from "prop-types";
import { trackBookingStartedConversion } from "../utils/googleAdsTracking";

const BookingModal = ({ show }) => {
  useEffect(() => {
    if (show) {
      trackBookingStartedConversion();
    }
  }, [show]);

  return null;
};

BookingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default BookingModal;
