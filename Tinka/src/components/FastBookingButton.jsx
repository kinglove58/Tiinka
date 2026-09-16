import PropTypes from "prop-types";

const FastBookingButton = ({
  children = "Book an Appointment",
  className = "",
  href = "/booking",
  ...props
}) => (
  <a {...props} href={href} className={`${className} relative overflow-hidden group`}>
    {children}
  </a>
);

FastBookingButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default FastBookingButton;
