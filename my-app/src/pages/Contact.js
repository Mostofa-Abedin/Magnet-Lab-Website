import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Magnet Labs provide?",
      answer:
        "Magnet Labs offers web development, SEO, social media marketing, and tailored packages to meet your business needs.",
    },
    {
      question: "How can I get started with Magnet Labs?",
      answer:
        "Simply use the contact form on this page or email us at info@magnetlabs.com. Our team will get back to you within 1-2 business days.",
    },
    {
      question: "Can I customize my package?",
      answer:
        "Absolutely! We provide flexible and customizable packages to suit your business requirements and goals.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in a variety of industries, including e-commerce, professional services, and startups, but are open to working with businesses from any sector.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide ongoing support and maintenance services to ensure your website and campaigns perform optimally.",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to right, #f0f4f8, #ffffff)",
        padding: "2rem 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Introductory Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to right, #1a1a1a, #333)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Let’s Build Something Great Together
        </h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem", maxWidth: "800px", margin: "1rem auto" }}>
          Whether you're looking to create a stunning website, boost your online presence, or
          launch an engaging marketing campaign, we're here to make it happen.
        </p>
      </section>

      {/* Message Form Section */}
      <section
        style={{
          padding: "4rem 2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            background: "linear-gradient(to right, #ffffff, #f7f9fc)",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              color: "#333",
              textAlign: "center",
            }}
          >
            Message Us
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out. We’ll get back to you soon!");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "1rem",
                border: "none",
                marginBottom: "1rem",
                borderRadius: "8px",
                background: "#f0f4f8",
                fontSize: "1rem",
              }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "1rem",
                border: "none",
                marginBottom: "1rem",
                borderRadius: "8px",
                background: "#f0f4f8",
                fontSize: "1rem",
              }}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              style={{
                width: "100%",
                padding: "1rem",
                border: "none",
                marginBottom: "1rem",
                borderRadius: "8px",
                background: "#f0f4f8",
                fontSize: "1rem",
              }}
              required
            ></textarea>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                border: "none",
                borderRadius: "8px",
                background: "linear-gradient(to right, #ff7f50, #ff6f61)",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.background = "linear-gradient(to right, #ff6f61, #ff7f50)")}
              onMouseOut={(e) => (e.target.style.background = "linear-gradient(to right, #ff7f50, #ff6f61)")}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#f9f9f9",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: openFAQ === index ? "#e9ecef" : "#fff",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{faq.question}</h3>
              {openFAQ === index && (
                <p style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#555" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
