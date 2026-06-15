import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowRight,
  FiClipboard,
  FiMail,
  FiPhone,
  FiShieldOff,
  FiShield,
  FiUserPlus,
} from "react-icons/fi";
import CanonicalLink from "../../components/CanonicalLink";

const formspreeEndpoint = "https://formspree.io/f/xzzaoopr";
const canonicalUrl = "https://tinkahealthservices.com/referral";

const Field = ({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  autoComplete,
}) => (
  <label className="block">
    <span className="text-sm font-bold text-[#06192f]">
      {label}
      {required ? <span className="text-[#005ab0]"> *</span> : null}
    </span>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="mt-2 w-full rounded-lg border border-[#cfe3f6] bg-white px-4 py-3 text-[#06192f] outline-none transition focus:border-[#005ab0] focus:ring-4 focus:ring-[#005ab0]/10"
    />
  </label>
);

const SelectField = ({ label, name, required = true, children }) => (
  <label className="block">
    <span className="text-sm font-bold text-[#06192f]">
      {label}
      {required ? <span className="text-[#005ab0]"> *</span> : null}
    </span>
    <select
      name={name}
      required={required}
      className="mt-2 w-full rounded-lg border border-[#cfe3f6] bg-white px-4 py-3 text-[#06192f] outline-none transition focus:border-[#005ab0] focus:ring-4 focus:ring-[#005ab0]/10"
    >
      {children}
    </select>
  </label>
);

const TextAreaField = ({ label, name, required = true, placeholder, rows = 4 }) => (
  <label className="block">
    <span className="text-sm font-bold text-[#06192f]">
      {label}
      {required ? <span className="text-[#005ab0]"> *</span> : null}
    </span>
    <textarea
      name={name}
      required={required}
      rows={rows}
      placeholder={placeholder}
      className="mt-2 w-full resize-y rounded-lg border border-[#cfe3f6] bg-white px-4 py-3 text-[#06192f] outline-none transition focus:border-[#005ab0] focus:ring-4 focus:ring-[#005ab0]/10"
    />
  </label>
);

const FormSection = ({ icon: Icon, title, description, children }) => (
  <section className="rounded-lg border border-[#cfe3f6] bg-white p-5 shadow-sm md:p-6">
    <div className="mb-5 flex items-start gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eaf5ff] text-[#005ab0]">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#06192f]">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </div>
    <div className="grid gap-5 md:grid-cols-2">{children}</div>
  </section>
);

const RadioOption = ({ name, value, label, required = false }) => (
  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#cfe3f6] bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-[#06192f] transition hover:border-[#005ab0]">
    <input
      type="radio"
      name={name}
      value={value}
      required={required}
      className="h-4 w-4 accent-[#005ab0]"
    />
    {label}
  </label>
);

const Referral = () => {
  const referralStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Patient Referral Form | Tinka Health Services",
    url: canonicalUrl,
    description:
      "Referral form for providers, family members, and community partners referring patients to Tinka Health Services for psychiatric care.",
    about: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      telephone: "+1 443-295-6600",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Maryland" },
        { "@type": "AdministrativeArea", name: "Washington DC" },
        { "@type": "AdministrativeArea", name: "Virginia" },
      ],
    },
  };

  return (
    <main className="bg-[#f4f8fc] pt-20 text-[#06192f]">
      <CanonicalLink href={canonicalUrl} />
      <Helmet>
        <title>Refer a Patient | Tinka Health Services</title>
        <meta
          name="description"
          content="Refer a patient to Tinka Health Services for psychiatric evaluation, medication management, therapy support, and telehealth care in MD, DC, and VA."
        />
        <meta
          name="keywords"
          content="refer a patient, psychiatry referral, mental health referral, medication management referral, psychiatric evaluation referral"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Refer a Patient | Tinka Health Services" />
        <meta
          property="og:description"
          content="Send contact details for a non-emergency referral so Tinka Health Services can follow up with the patient or referring person."
        />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(referralStructuredData)}
        </script>
      </Helmet>

      <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
              Patient referral
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-[#06192f] md:text-6xl">
              Refer someone for mental health care
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Use this contact request to share who needs care, who is making
              the referral, and the best way for our team to follow up. Detailed
              medical and insurance information can be collected during the
              first direct conversation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+14432956600"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#005ab0] px-6 py-4 font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] transition hover:bg-[#00427f]"
              >
                <FiPhone aria-hidden="true" />
                Call 443-295-6600
              </a>
              <Link
                to="/insurance-we-accept"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9fc8ee] bg-white px-6 py-4 font-bold text-[#005ab0] shadow-sm transition hover:border-[#005ab0] hover:bg-[#f4f9fd]"
              >
                <FiShield aria-hidden="true" />
                Accepted Insurance
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-[#cfe3f6] bg-[#f8fbff] p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#005ab0] shadow-sm">
              <FiAlertCircle aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#06192f]">
              Before you submit
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p>
                This form is for non-emergency referrals only. If the patient is
                in immediate danger, call 911 or go to the nearest emergency
                department. For mental health crisis support, call or text 988.
              </p>
              <p>
                Please do not submit diagnoses, medication lists, insurance
                member IDs, policy numbers, medical records, or other sensitive
                health details through this form. We will request what is needed
                during follow-up.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <form
          action={formspreeEndpoint}
          method="POST"
          className="mx-auto grid max-w-6xl gap-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Patient Referral - Tinka Health Services"
          />
          <input type="hidden" name="form_type" value="Patient referral" />

          <FormSection
            icon={FiUserPlus}
            title="Patient information"
            description="Tell us who needs care and how our team should reach them."
          >
            <Field
              label="Patient full name"
              name="patient_full_name"
              autoComplete="name"
            />
            <Field
              label="Patient phone number"
              name="patient_phone"
              type="tel"
              autoComplete="tel"
            />
            <Field
              label="Patient email"
              name="patient_email"
              type="email"
              required={false}
              autoComplete="email"
            />
            <SelectField label="Patient location" name="patient_location">
              <option value="">Select location</option>
              <option>Maryland</option>
              <option>Washington DC</option>
              <option>Virginia</option>
              <option>Other</option>
            </SelectField>
            <SelectField label="Preferred contact method" name="preferred_contact_method">
              <option value="">Select contact method</option>
              <option>Phone call</option>
              <option>Text message</option>
              <option>Email</option>
              <option>Contact the referring person first</option>
            </SelectField>
            <Field
              label="Best time to contact"
              name="best_time_to_contact"
              required={false}
              placeholder="Morning, afternoon, evening, or any time"
            />
          </FormSection>

          <FormSection
            icon={FiClipboard}
            title="General referral details"
            description="Share only the basic service request. Keep private medical details for the first direct conversation."
          >
            <SelectField label="Main service requested" name="requested_service">
              <option value="">Select service</option>
              <option>Psychiatric evaluation</option>
              <option>Medication management</option>
              <option>Therapy support</option>
              <option>Telehealth psychiatry</option>
              <option>Primary and preventive care</option>
              <option>Not sure</option>
            </SelectField>
            <SelectField label="Referral urgency" name="referral_urgency">
              <option value="">Select urgency</option>
              <option>Routine</option>
              <option>Needs appointment soon</option>
              <option>Follow up after hospital or ER visit</option>
              <option>Other non-emergency concern</option>
            </SelectField>
            <div className="md:col-span-2">
              <TextAreaField
                label="Short non-sensitive note"
                name="non_sensitive_referral_note"
                required={false}
                placeholder="Optional. Example: Please call the patient to discuss an appointment. Do not include diagnosis, medication, insurance ID, or medical record details."
                rows={4}
              />
            </div>
          </FormSection>

          <FormSection
            icon={FiShieldOff}
            title="Insurance status"
            description="Tell us only whether the patient has insurance. We will collect plan details securely during follow-up."
          >
            <div className="md:col-span-2">
              <span className="text-sm font-bold text-[#06192f]">
                Does the patient have insurance? <span className="text-[#005ab0]">*</span>
              </span>
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                <RadioOption
                  name="has_insurance"
                  value="Yes"
                  label="Yes"
                  required
                />
                <RadioOption name="has_insurance" value="No" label="No" />
                <RadioOption
                  name="has_insurance"
                  value="Not sure"
                  label="Not sure"
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            icon={FiMail}
            title="Referring person"
            description="Tell us who is sending the referral and how we can follow up."
          >
            <Field
              label="Your full name"
              name="referrer_full_name"
              autoComplete="name"
            />
            <Field
              label="Your role or relationship"
              name="referrer_relationship"
              placeholder="Doctor, therapist, parent, case manager, self, etc."
            />
            <Field
              label="Organization or practice"
              name="referrer_organization"
              required={false}
            />
            <Field
              label="Your phone number"
              name="referrer_phone"
              type="tel"
              autoComplete="tel"
            />
            <Field
              label="Your email"
              name="email"
              type="email"
              autoComplete="email"
            />
            <SelectField label="May we contact you about this referral?" name="contact_referrer">
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No, contact the patient only</option>
              <option>Contact me first</option>
            </SelectField>
            <div className="md:col-span-2">
              <TextAreaField
                label="Additional notes"
                name="additional_notes"
                required={false}
                placeholder="Anything else our team should know before reaching out?"
                rows={4}
              />
            </div>
          </FormSection>

          <div className="rounded-lg border border-[#cfe3f6] bg-white p-5 shadow-sm md:p-6">
            <label className="flex items-start gap-3 text-sm leading-7 text-slate-700">
              <input
                type="checkbox"
                name="referral_confirmation"
                required
                className="mt-1 h-5 w-5 shrink-0 accent-[#005ab0]"
              />
              <span>
                I confirm this is a non-emergency referral and that the patient
                or legally authorized person has given permission, when required,
                for Tinka Health Services to receive these contact details and
                contact the patient or referring person. I understand that
                medical records, diagnoses, medication lists, and insurance
                numbers should not be submitted through this form.
              </span>
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#005ab0] px-7 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] transition hover:bg-[#00427f]"
              >
                Submit Referral
                <FiArrowRight aria-hidden="true" />
              </button>
              <p className="text-sm leading-6 text-slate-600">
                Our team will review the referral and follow up using the
                contact details provided.
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Referral;
