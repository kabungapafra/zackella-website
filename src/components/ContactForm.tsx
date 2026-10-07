"use client";

import { useId, useState } from "react";
import { enquiryTopics } from "@/data/services";
import { mailtoLink, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icon";

const fieldBase =
  "border-line-400 bg-cream-100 text-ink box-border w-full rounded-xl border-[1.5px] px-3.5 text-base font-medium";
const inputClasses = `${fieldBase} h-[54px]`;
const labelClasses =
  "text-ink-muted text-xs font-bold tracking-[0.12em] uppercase";

/**
 * Enquiry form that hands off to WhatsApp or the visitor's mail client rather
 * than posting to a server, so there is no backend to keep running and no
 * contact details stored anywhere.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <div className="border-line rounded-3xl border bg-white px-5 py-6 shadow-[0_20px_40px_rgb(12_51_32_/_0.1)] lg:rounded-[26px] lg:p-8.5 lg:shadow-[0_24px_48px_rgb(12_51_32_/_0.12)]">
      <h2 className="text-[29px] leading-tight lg:text-[32px]">Send us your plan</h2>
      <p className="text-ink-muted mt-2 text-[15px] leading-relaxed lg:mt-2.5 lg:text-base">
        Your message opens in WhatsApp or your email, ready to send.
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
          className="btn-lift bg-gold text-forest-900 flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[17px] font-bold lg:text-base"
        >
          <WhatsAppIcon size={20} className="stroke-forest-900" strokeWidth={2} />
          Send on WhatsApp
        </a>
        <a
          href={mailtoLink(`Enquiry from ${name || "the website"}`, body)}
          className="btn-lift border-forest-800 text-forest-800 flex items-center justify-center rounded-full border-2 px-7 py-3.5 text-[17px] font-bold lg:text-base"
        >
          Send by email
        </a>
      </div>
    </div>
  );
}
