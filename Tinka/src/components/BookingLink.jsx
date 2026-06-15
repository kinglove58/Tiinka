const TEBRA_BOOKING_URL =
  "https://www.tebra.com/care/provider/seliat-dosunmu-dnp-pmhnp-bc-fnp-c-1023483484";

const BookingLink = ({
  className = "",
  children = "Book an Appointment",
  onClick,
  href = TEBRA_BOOKING_URL,
  target = "_blank",
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
      onClick={onClick}
      className={classes}
    >
      {children}
    </a>
  );
};

export default BookingLink;
