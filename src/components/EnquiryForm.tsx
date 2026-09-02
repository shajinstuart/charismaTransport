import { FormEvent, type ReactNode, useState } from "react";
import { buses } from "../data/buses";
import { tripTypes } from "../data/whyChoose";
import { buildEnquiryMessage, getWhatsAppChatUrl } from "../lib/whatsapp";
import type { EnquiryFormData, TripType } from "../types";

const initial: EnquiryFormData = {
  name: "",
  phone: "",
  startingLocation: "",
  destination: "",
  travelDate: "",
  returnDate: "",
  passengers: "",
  busPreference: "",
  tripType: "",
  message: "",
};

type Errors = Partial<Record<keyof EnquiryFormData, string>>;

function validate(data: EnquiryFormData): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[0-9]{10}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a 10-digit phone number.";
  }
  if (!data.startingLocation.trim()) errors.startingLocation = "Enter the starting location.";
  if (!data.destination.trim()) errors.destination = "Enter the destination.";
  if (!data.travelDate) errors.travelDate = "Select a travel date.";
  if (data.returnDate && data.travelDate && data.returnDate < data.travelDate) {
    errors.returnDate = "Return date cannot be before the travel date.";
  }
  const passengers = Number(data.passengers);
  if (!data.passengers || Number.isNaN(passengers) || passengers < 1) {
    errors.passengers = "Enter the number of passengers.";
  }
  if (!data.tripType) errors.tripType = "Select a trip type.";
  return errors;
}

const fieldClass =
  "mt-1 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-gold";

export function EnquiryForm() {
  const [data, setData] = useState<EnquiryFormData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function update<K extends keyof EnquiryFormData>(key: K, value: EnquiryFormData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSuccess(false);
      return;
    }
    const url = getWhatsAppChatUrl(buildEnquiryMessage(data));
    window.open(url, "_blank", "noopener,noreferrer");
    setSuccess(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name" required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={data.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone} htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            className={fieldClass}
            value={data.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field label="Starting Location" error={errors.startingLocation} htmlFor="from" required>
          <input
            id="from"
            name="startingLocation"
            className={fieldClass}
            value={data.startingLocation}
            aria-invalid={Boolean(errors.startingLocation)}
            aria-describedby={errors.startingLocation ? "from-error" : undefined}
            onChange={(e) => update("startingLocation", e.target.value)}
          />
        </Field>
        <Field label="Destination" error={errors.destination} htmlFor="destination" required>
          <input
            id="destination"
            name="destination"
            className={fieldClass}
            value={data.destination}
            aria-invalid={Boolean(errors.destination)}
            aria-describedby={errors.destination ? "destination-error" : undefined}
            onChange={(e) => update("destination", e.target.value)}
          />
        </Field>
        <Field label="Travel Date" error={errors.travelDate} htmlFor="travelDate" required>
          <input
            id="travelDate"
            name="travelDate"
            type="date"
            className={fieldClass}
            value={data.travelDate}
            aria-invalid={Boolean(errors.travelDate)}
            aria-describedby={errors.travelDate ? "travelDate-error" : undefined}
            onChange={(e) => update("travelDate", e.target.value)}
          />
        </Field>
        <Field label="Return Date" error={errors.returnDate} htmlFor="returnDate">
          <input
            id="returnDate"
            name="returnDate"
            type="date"
            className={fieldClass}
            value={data.returnDate}
            aria-invalid={Boolean(errors.returnDate)}
            aria-describedby={errors.returnDate ? "returnDate-error" : undefined}
            onChange={(e) => update("returnDate", e.target.value)}
          />
        </Field>
        <Field label="Number of Passengers" error={errors.passengers} htmlFor="passengers" required>
          <input
            id="passengers"
            name="passengers"
            type="number"
            min={1}
            className={fieldClass}
            value={data.passengers}
            aria-invalid={Boolean(errors.passengers)}
            aria-describedby={errors.passengers ? "passengers-error" : undefined}
            onChange={(e) => update("passengers", e.target.value)}
          />
        </Field>
        <Field label="Bus Preference" htmlFor="busPreference">
          <select
            id="busPreference"
            name="busPreference"
            className={fieldClass}
            value={data.busPreference}
            onChange={(e) => update("busPreference", e.target.value)}
          >
            <option value="">No preference</option>
            {buses.map((bus) => (
              <option key={bus.seatingCapacity} value={`${bus.seatingCapacity} seater`}>
                {bus.seatingCapacity} seater
              </option>
            ))}
          </select>
        </Field>
        <Field label="Trip Type" error={errors.tripType} htmlFor="tripType" required>
          <select
            id="tripType"
            name="tripType"
            className={fieldClass}
            value={data.tripType}
            aria-invalid={Boolean(errors.tripType)}
            aria-describedby={errors.tripType ? "tripType-error" : undefined}
            onChange={(e) => update("tripType", e.target.value as TripType | "")}
          >
            <option value="">Select trip type</option>
            {tripTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={fieldClass}
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </Field>
        </div>
      </div>
      {success ? (
        <p className="mt-4 rounded-xl bg-teal/10 px-4 py-3 text-sm text-teal-dark" role="status">
          WhatsApp is opening with your enquiry. If it did not open, allow pop-ups or tap WhatsApp Us.
        </p>
      ) : null}
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send enquiry on WhatsApp
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  const errorId = error ? `${htmlFor}-error` : undefined;
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-teal"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
