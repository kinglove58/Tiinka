import { useEffect } from "react";
import PropTypes from "prop-types";

const QuickBookingModal = ({ show }) => {
  useEffect(() => {
    if (show) {
      window.location.assign("/booking");
    }
  }, [show]);

  return null;
};

QuickBookingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default QuickBookingModal;
