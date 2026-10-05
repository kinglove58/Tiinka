import PropTypes from "prop-types";
import { trackBookingStartedConversion } from "../utils/googleAdsTracking";

const BookingLink = ({
  className = "",
  children = "Book an Appointment",
  onClick,
  href = "/booking",
  target = "_self",
}) => {
  // If the consumer provides a text- or bg- utility, prefer that instead of defaults
  const hasTextUtility = /\btext-[^\s!]+/.test(className);
  const hasBgUtility = /\bbg-[^\s!]+/.test(className);

  const classes = [
    "inline-block",
    // only add default background if not provided
    !hasBgUtility && "bg-blue-600",
    // only add default text color if not provided
    !hasTextUtility && "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    // keep a reasonable hover for default bg; consumer can override hover if needed
    "hover:bg-blue-700",
    "transition",
    "duration-300",
    "font-semibold",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !href.startsWith("/booking") || target !== "_self") return;
        event.preventDefault();
        trackBookingStartedConversion(href);
      }}
      className={classes}
    >
      {children}
    </a>
  );
};

BookingLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default BookingLink;
