"use client";
import React, { useState, useRef, useCallback } from "react";
import Avatar from "../public/assets/avatar.gif";
import emailjs from "@emailjs/browser";
import styles from "../styles/contactForm.module.css";
import Image from "next/image";
const ContactForm = () => {
  const [status, setStatus] = useState("");
  const form = useRef();

  const handleOnSubmit = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vfhjlfq",
        "template_bjd1ys6",
        form.current,
        "xb23kWtrN2m00CfkR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          setStatus("Message Sent Successfully!");
          // Reset the form after successful submission.
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  }, []);

  const addClass = useCallback(() => {
    document.body.classList.add("sent");
  }, []);

  return (
    <div className={styles.contactForm} id="contact-form">
      <div className={styles.container}>
        <div className={styles.avatarForm}>
          <div className={styles.avatarDiv}>
            <Image src="/assets/avatar.gif" alt="avatar" width={100} height={100} />
          </div>
        </div>
        <div className={styles.formH2}>
          <h2 className={styles.formH2Heading}>&bull; Keep in Touch &bull;</h2>
          <form
            ref={form}
            onSubmit={handleOnSubmit}
            className={styles.contactFormForm}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name_input" className={styles.label}></label>
              <input
                type="text"
                placeholder="My name is"
                name="from_name"
                id="name_input"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email_input" className={styles.label}></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
                className={styles.input}
              />
            </div>

  

            <div className={styles.inputGroup}>
              <label htmlFor="subject_input" className={styles.label}></label>
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
                className={styles.select}
              >
                <option disabled hidden value="">
                  Subject line
                </option>
                <option>I&apos;d like to start a project</option>
                <option>I&apos;d like to ask a question</option>
                <option>I&apos;d like to make a proposal</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message_input" className={styles.label}></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                cols="30"
                rows="5"
                required
                className={styles.textarea}
              ></textarea>
            </div>

            <div className={styles.submit}>
              <input
                type="submit"
                value="Send Message"
                id="form_button"
                onClick={addClass}
                className={styles.formButton}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
