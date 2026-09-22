import { memo } from "react";
import { Link } from "react-router-dom";
import { insuranceLogoData } from "./insuranceLogoData";

const InsuranceLogo = () => (
  <section
    className="bg-gray-100 px-4 py-6 text-center"
    aria-labelledby="insurance-logos-heading"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <Link
          to="/insurance-we-accept"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#005ab0] px-4 py-2 text-sm font-bold text-white hover:bg-[#00427f]"
        >
          View Accepted Insurance Plans
        </Link>
      </div>
      <div className="grid grid-cols-4 items-center gap-x-3 gap-y-2 lg:grid-cols-8">
        {insuranceLogoData.map((image, index) => (
          <img
            key={image.imgUrl}
            src={image.imgUrl}
            alt={
              [
                "Aetna",
                "Blue Cross",
                "Johns Hopkins EHP",
                "Cigna",
                "CareFirst",
                "Kaiser Permanente",
                "Medicaid",
                "UnitedHealthcare",
              ][index]
            }
            width="140"
            height="64"
            loading="lazy"
            className="mx-auto h-14 w-full max-w-32 object-contain sm:h-16"
          />
        ))}
      </div>
    </div>
  </section>
);
export default memo(InsuranceLogo);
