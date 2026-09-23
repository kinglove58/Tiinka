import { memo } from "react";
import { insuranceLogoData } from "./insuranceLogoData";

const InsuranceLogo = () => (
  <section
    className="bg-gray-100 px-4 py-6 text-center"
    aria-labelledby="insurance-logos-heading"
  >
    <div className="mx-auto max-w-6xl">
      <h2 id="insurance-logos-heading" className="mb-4 text-lg font-bold text-[#0b2d4f]">
        Insurance plans we accept
      </h2>
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
