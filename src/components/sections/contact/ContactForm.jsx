"use client";

import { useId, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import Button from "@/components/ui/Button";
import { contact, enquiryTopics } from "@/data/contact";
import styles from "./ContactForm.module.css";

const initial = { name: "", email: "", topic: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.topic) errors.topic = "Please choose what your question is about.";
  if (values.message.trim().length < 10) errors.message = "Please write a short message (at least 10 characters).";
  return errors;
}

/**
 * Front-end only enquiry form: validates accessibly, then hands the message
 * to the visitor’s email app (no backend in this project).
 */
export default function ContactForm() {
  const id = useId().replace(/:/g, "");
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const successRef = useRef(null);
  const formRef = useRef(null);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    `${values.topic || "Enquiry"} — ${values.name}`
  )}&body=${encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`)}`;

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setSent(true);
    requestAnimationFrame(() => {
      successRef.current?.focus();
      gsap.fromTo(successRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" });
    });
  };

  if (sent) {
    return (
      <div ref={successRef} className={styles.success} tabIndex={-1} role="status">
        <p className={styles.successTitle}>Thank you, {values.name.split(" ")[0]} 🙏</p>
        <p>
          Your message is ready. As this website is a training project, please send it from your email app — or reach us
          directly on WhatsApp. {contact.responseTime}
        </p>
        <div className="cta-row">
          <Button href={mailto}>Open in email app</Button>
          <Button href={contact.whatsappHref} variant="outline">
            WhatsApp us
          </Button>
        </div>
        <button
          type="button"
          className={styles.reset}
          onClick={() => {
            setValues(initial);
            setSent(false);
          }}
        >
          Write another message
        </button>
      </div>
    );
  }

  const field = (name) => ({
    id: `${id}-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  const error = (name) =>
    errors[name] && (
      <p id={`${id}-${name}-error`} className={styles.error}>
        {errors[name]}
      </p>
    );

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${id}-name`}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...field("name")} />
          {error("name")}
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-email`}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" required {...field("email")} />
          {error("email")}
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-topic`}>
          What is your question about? <span aria-hidden="true">*</span>
        </label>
        <select required {...field("topic")}>
          <option value="">Please choose…</option>
          {enquiryTopics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {error("topic")}
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-message`}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea rows={6} required {...field("message")} />
        {error("message")}
      </div>
      <p className={styles.hint}>* Required fields. {contact.responseTime}</p>
      <Button type="submit" variant="dark">
        Send message
      </Button>
    </form>
  );
}
