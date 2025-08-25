import React, { useState } from "react";
import "./Contact.css";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // TODO: Implement email sending logic here
      // Currently only logs to console - no actual storage/sending
      console.log("Form data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Have a project in mind or just want to say hello? I'd love to hear from
        you. Leave me a short message and I'll get back to you as soon as
        possible.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-textarea"
            rows={5}
            placeholder="Message"
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus && (
          <div
            className={`submit-status ${
              submitStatus.includes("success") ? "success" : "error"
            }`}
          >
            {submitStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
