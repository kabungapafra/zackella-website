"use client";

import { useId, useState, type FormEvent } from "react";
import { fleet } from "@/data/fleet";
import { tours } from "@/data/tours";
import { sendInquiry } from "@/lib/inquiry";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icon";

type Mode = "tour" | "car";

const partySizes = [
  "1 traveller",
  "2 travellers",
  "3 travellers",
  "4 travellers",
  "5 to 8 travellers",
  "More than 8 travellers",
] as const;

const fieldClasses =
  "border-line-400 text-ink h-[52px] w-full rounded-xl border-[1.5px] bg-white px-3 text-base font-medium lg:h-[54px] lg:px-3.5";
const labelClasses =
  "text-ink-muted text-xs font-bold tracking-[0.12em] uppercase";

/**
 * Quick-enquiry card that straddles the hero. It composes a message from the
 * chosen options and either opens it in WhatsApp or emails it to the office
 * through Web3Forms, so the site stays static.
 */
export function EnquiryPanel() {
  const [mode, setMode] = useState<Mode>("tour");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [party, setParty] = useState("");
  const [driver, setDriver] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const ids = useId();
  const isTour = mode === "tour";

  const message = isTour
    ? `Hello Zackella! I'd like a tour quote. Destination: ${destination || "not sure yet"}. Travel date: ${date || "flexible"}. Travellers: ${party || "to be confirmed"}.`
    : `Hello Zackella! I'd like to hire a car. Vehicle: ${vehicle || "not sure yet"}. From: ${date || "flexible"}. Driver: ${driver || "to be confirmed"}.`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const sent = await sendInquiry({
      subject: `${isTour ? "Tour" : "Car hire"} inquiry from ${name}`,
      from_name: name,
      contact,
      message,
    });
    if (!sent) {
      setStatus("error");
      return;
    }
    setDestination("");
    setVehicle("");
    setDate("");
    setParty("");
    setDriver("");
    setName("");
    setContact("");
    setStatus("sent");
  }

  function tabClasses(active: boolean) {
    // The tabs split the width evenly on phones and shrink to their label from
    // `lg`, where they share the row with the strapline.
    return `min-h-[46px] flex-1 cursor-pointer rounded-full px-3 py-3.5 text-[17px] font-bold lg:flex-none lg:px-6 ${
      active ? "bg-forest-800 text-cream" : "text-forest-800 bg-transparent"
    }`;
  }

  return (
    <div
      id="enquire"
      className="relative z-[3] -mt-19 px-4 sm:-mt-28 sm:px-7 lg:mx-auto lg:max-w-[1600px]"
    >
      <form
        onSubmit={handleSubmit}
        className="border-line bg-cream-100 rounded-[22px] border p-4.5 shadow-[0_24px_48px_rgb(12_51_32_/_0.28)] lg:rounded-3xl lg:px-7 lg:py-6.5 lg:shadow-[0_30px_60px_rgb(12_51_32_/_0.28)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3.5">
          <div
            role="group"
            aria-label="What do you need?"
            className="bg-sand flex w-full gap-1 rounded-full p-[5px] lg:inline-flex lg:w-auto"
          >
            <button
              type="button"
              aria-pressed={isTour}
              onClick={() => setMode("tour")}
              className={tabClasses(isTour)}
            >
              Tours &amp; Travel
            </button>
            <button
              type="button"
              aria-pressed={!isTour}
              onClick={() => setMode("car")}
              className={tabClasses(!isTour)}
            >
              Car Hire
            </button>
          </div>
          {/* On phones this reassurance moves below the button instead. */}
          <p className="text-ink-muted hidden text-[17px] lg:block">
            Tell us the basics. We reply with a plan and a quote.
          </p>
        </div>

        <div className="mt-4 grid items-end gap-3.5 md:grid-cols-2 lg:mt-5 lg:gap-4 lg:grid-cols-3">
          {isTour ? (
            <div className="flex flex-col gap-2">
              <label htmlFor={`${ids}-dest`} className={labelClasses}>
                Where to?
              </label>
              <select
                id={`${ids}-dest`}
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                className={fieldClasses}
              >
                <option value="">Choose a destination</option>
                {tours.map((tour) => (
                  <option key={tour.slug} value={tour.shortName}>
                    {tour.shortName}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet, advise me</option>
              </select>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label htmlFor={`${ids}-veh`} className={labelClasses}>
                Which vehicle?
              </label>
              <select
                id={`${ids}-veh`}
                value={vehicle}
                onChange={(event) => setVehicle(event.target.value)}
                className={fieldClasses}
              >
                <option value="">Choose a vehicle</option>
                {fleet.map((vehicle) => (
                  <option key={vehicle.slug} value={vehicle.name}>
                    {vehicle.shortName}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet, advise me</option>
              </select>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor={`${ids}-date`} className={labelClasses}>
              When?
            </label>
            <input
              id={`${ids}-date`}
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={fieldClasses}
            />
          </div>

          {isTour ? (
            <div className="flex flex-col gap-2">
              <label htmlFor={`${ids}-pax`} className={labelClasses}>
                Travellers
              </label>
              <select
                id={`${ids}-pax`}
                value={party}
                onChange={(event) => setParty(event.target.value)}
                className={fieldClasses}
              >
                <option value="">How many?</option>
                {partySizes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label htmlFor={`${ids}-drv`} className={labelClasses}>
                Driver
              </label>
              <select
                id={`${ids}-drv`}
                value={driver}
                onChange={(event) => setDriver(event.target.value)}
                className={fieldClasses}
              >
                <option value="">With or without?</option>
                <option value="With a driver">With a driver</option>
                <option value="Self-drive">Self-drive</option>
              </select>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor={`${ids}-name`} className={labelClasses}>
              Your name
            </label>
            <input
              id={`${ids}-name`}
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${ids}-contact`} className={labelClasses}>
              Phone or email
            </label>
            <input
              id={`${ids}-contact`}
              type="text"
              required
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              className={fieldClasses}
            />
          </div>

          <div className="flex gap-2.5">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener"
              className="btn-lift bg-gold text-forest-900 flex h-[54px] flex-1 items-center justify-center gap-2.5 rounded-xl px-4 text-base font-bold whitespace-nowrap"
            >
              <WhatsAppIcon size={20} className="stroke-forest-900" strokeWidth={2} />
              WhatsApp
            </a>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-lift border-forest-800 text-forest-800 flex h-[54px] flex-1 items-center justify-center rounded-xl border-2 px-4 text-base font-bold whitespace-nowrap"
            >
              {status === "sending" ? "Sending…" : "Send by email"}
            </button>
          </div>
        </div>

        {status === "sent" && (
          <p role="status" className="text-forest-800 mt-3.5 text-[17px] font-semibold">
            Thank you! Your inquiry is on its way. We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-3.5 text-[17px] font-semibold text-red-700">
            Sorry, that didn&apos;t send. Please try again, or email us at{" "}
            <a href={site.email.href} className="underline">
              {site.email.display}
            </a>
            .
          </p>
        )}

        <p className="text-ink-muted mt-3.5 text-center text-sm lg:hidden">
          We reply with a plan and a quote.
        </p>
      </form>
    </div>
  );
}
