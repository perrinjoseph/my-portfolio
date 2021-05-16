import React from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_93fizdk",
        "template_6q47co3",
        e.target,
        "user_ET66PZz9K2U2D1nTmVvlB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact-form">
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          placeholder="Name"
          className="contact-form__input"
          type="text"
          name="name"
          required={true}
        />

        <input
          placeholder="Email"
          className="contact-form__input"
          type="email"
          name="email"
          required={true}
        />

        <textarea
          placeholder="Message"
          className="contact-form__input"
          rows={7}
          name="message"
          required={true}
        />
        <input type="submit" value="Send" className="btn--contact footer-btn contact-form-btn" />
      </form>
    </div>
  );
}

export default ContactForm;
