"use client";

import { useId, useState, type FormEvent } from "react";
import { enquiryTopics } from "@/data/services";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icon";

const fieldBase =
  "border-line-400 bg-cream-100 text-ink box-border w-full rounded-xl border-[1.5px] px-3.5 text-base font-medium";
const inputClasses = `${fieldBase} h-[54px]`;
const labelClasses =
  "text-ink-muted text-xs font-bold tracking-[0.12em] uppercase";

/**
 * Enquiry form that either hands off to WhatsApp or emails the inquiry to the
 * office through Web3Forms, so the static site needs no backend of its own.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const ids = useId();

  const body = [
    `Hello Zackella! My name is ${name || "(name not given)"}.`,
    `I'm interested in: ${topic || "a quote"}.`,
    `Date: ${date || "flexible"}.`,
    contact ? `Contact: ${contact}.` : "",
    message,
  ]
    .filter(Boolean)
    .join(" ");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.email.formKey,
          subject: `Inquiry from ${name || "the website"}`,
          from_name: name,
          contact,
          topic: topic || "a quote",
          date: date || "flexible",
          message,
        }),
      });
      const result = await response.json();
      if (!result.success) {
        setStatus("error");
        return;
      }
      setName("");
      setContact("");
      setTopic("");
      setDate("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-line rounded-3xl border bg-white px-5 py-6 shadow-[0_20px_40px_rgb(12_51_32_/_0.1)] lg:rounded-[26px] lg:p-8.5 lg:shadow-[0_24px_48px_rgb(12_51_32_/_0.12)]">
      <h2 className="text-[29px] leading-tight lg:text-[32px]">Send us your plan</h2>
      <p className="text-ink-muted mt-2 text-[17px] leading-relaxed lg:mt-2.5 lg:text-base">
        Send it straight to our inbox, or open it in WhatsApp.
      </p>

      <div className="mt-5.5 grid gap-4 sm:grid-cols-2 lg:mt-6.5 lg:gap-4.5">
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
            className={inputClasses}
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
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${ids}-topic`} className={labelClasses}>
            I&apos;m interested in
          </label>
          <select
            id={`${ids}-topic`}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className={inputClasses}
          >
            <option value="">Choose a service</option>
            {enquiryTopics.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${ids}-date`} className={labelClasses}>
            When?
          </label>
          <input
            id={`${ids}-date`}
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 lg:mt-4.5">
        <label htmlFor={`${ids}-msg`} className={labelClasses}>
          Tell us more
        </label>
        <textarea
          id={`${ids}-msg`}
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldBase} resize-y py-3.5 leading-normal`}
        />
      </div>

      <div className="mt-5.5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={whatsappLink(body)}
          target="_blank"
          rel="noopener"
          className="btn-lift bg-gold text-forest-900 flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[19px] font-bold lg:text-base"
        >
          <WhatsAppIcon size={20} className="stroke-forest-900" strokeWidth={2} />
          Send on WhatsApp
        </a>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-lift border-forest-800 text-forest-800 flex items-center justify-center rounded-full border-2 px-7 py-3.5 text-[19px] font-bold lg:text-base"
        >
          {status === "sending" ? "Sending…" : "Send by email"}
        </button>
      </div>

      {status === "sent" && (
        <p role="status" className="text-forest-800 mt-4 text-[17px] font-semibold">
          Thank you! Your inquiry is on its way. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-4 text-[17px] font-semibold text-red-700">
          Sorry, that didn&apos;t send. Please try again, or email us at{" "}
          <a href={site.email.href} className="underline">
            {site.email.display}
          </a>
          .
        </p>
      )}
    </form>
  );
}
