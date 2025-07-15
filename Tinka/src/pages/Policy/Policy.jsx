import React, { memo, useContext } from "react";
import { BlogContext } from "../../BlogContext/BlogContext";
import { PuffLoader } from "react-spinners";

const Policy = () => {
  const { policy, policyLoading, error } = useContext(BlogContext);

  if (policyLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PuffLoader color="#FF4500" size={80} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-14 md:py-16">
      <div className="text-center mb-4 w-full p-8 md:p-24 bg-[#005ab0] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
          Terms & Condition
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-md">
          Created on: {new Date(policy.created_at).toLocaleDateString()} Updated
          on: {new Date(policy.updated_at).toLocaleDateString()}
        </p>
      </div>

      {policy && (
        <div className="overflow-auto px-4 md:px-8 lg:px-16 py-8">
          <div
            className="text-gray-700 max-w-none"
            dangerouslySetInnerHTML={{ __html: policy.body }}
          ></div>
        </div>
      )}
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Our Responsibilities
          </h3>
          <p className="mb-4">We are committed to:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Protecting the privacy and confidentiality of your healthcare
              information.
            </li>
            <li>
              Providing you with this Notice of Privacy Practices and following
              its terms.
            </li>
            <li>
              Notifying you in the event of a breach of your unsecured medical
              information.
            </li>
            <li>Abiding by the terms of the Notice currently in effect.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Changes to this Notice
          </h3>
          <p>
            We reserve the right to modify this Notice of Privacy Practices at
            any time. If the terms of the Notice are changed, the new terms will
            apply to all your health information, whether created or received by
           Tinka Health Services before or after the date on which the
            Notice is changed. Any material changes will be promptly posted in
            our office and on our website, if applicable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Policy);
