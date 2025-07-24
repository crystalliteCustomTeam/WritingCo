"use client";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from "@/styles/contact/contactus.module.scss";
import CtaContact from "@/src/app/contact-us/ctacontact";
import { useEffect, useState } from "react";

export default function Page() {
  const [ip, setIP] = useState({});
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState("Submit");
  const [error, setError] = useState("");

  useEffect(() => {
    const getIPData = async () => {
      try {
        const response = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c");
        const data = await response.json();
        setIP(data);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFormStatus("Processing...");
    setIsDisabled(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const comment = e.target.comment.value.trim();
    const person = e.target.person?.value || "";

    if (!name || !email || !phone) {
      setError("Please fill in all required fields.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }

    const selectedServices = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    )
      .map((checkbox) => checkbox.value)
      .join(", ");

    const location = {
      ip: ip.ip || "",
      country: ip.country || "",
      city: ip.city || "",
      state: ip.region || "",
      zip: ip.postal || "",
    };

    const payload = {
      name,
      email,
      phone,
      comment,
      person,
      services: selectedServices,
      location,
      page_url: pagenewurl,
    };

    try {
      // Submit to Google Sheets (internal API)
      const res = await fetch("/api/contact-from", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // const result = await res.json();
      // if (!result.success) {
      //   throw new Error(result.error || "Failed to submit form");
      // }

      // Submit to External Email API
      await fetch("https://api.infinitidigital.us/api/send-brandemail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: email,
          brand_id: 2,
          name: name,
          phone: phone,
          website: pagenewurl,
          custom_data: {
            message: comment,
            service: selectedServices,
            who: person,
            ip: location.ip,
            country: location.country,
            city: location.city,
            url: pagenewurl,
          },
        }),
      });

      // Success redirect or message
      window.location.href = "/thank-you";
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setFormStatus("Submit");
      setIsDisabled(false);
    }
  };


  return (
    <>
      <section className={`${styles.contactSection} pt-100`}>
        <Container>
          <Row>
            <Col md={11} lg={10} xl={8} className="m-auto text-center">
              <h1>Contact Us</h1>
              <p>
                We are dedicated to helping you elevate your book and achieve
                your publishing goals.
              </p>
            </Col>
            <Col md={11} lg={10} xl={8} className="m-auto">
              <Form onSubmit={handleSubmit}>
                <div className={styles.contactpageFrom}>
                  <div className={styles.contactItem}>
                    <label>Full Name</label>
                    <input type="text" required name="name" />
                  </div>
                  <div className={styles.contactItem}>
                    <label>Email</label>
                    <input type="email" required name="email" />
                  </div>
                  <div className={styles.contactItem}>
                    <label>Phone</label>
                    <input type="tel" required name="phone" />
                  </div>
                  <div className={styles.contactItem}>
                    <label>Message</label>
                    <textarea name="comment"></textarea>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.tit}>Are you a?</div>
                    <div className={styles.radioBtn}>
                      {["Author", "Publisher", "Other"].map((role) => (
                        <label key={role}>
                          <input type="radio" name="person" value={role} />
                          {role}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.tit}>Services</div>
                    <div className={styles.checkContainer}>
                      {[
                        "Book Writing",
                        "Book Video Trailer",
                        "Book Editing",
                        "Audio Book",
                        "Book Publishing",
                        "Book Cover Design",
                        "Book Marketing",
                        "Author Website",
                        "Children Book Publication",
                        "Proofreading",
                        "Children Book Illustration",
                      ].map((service, index) => (
                        <div className={styles.checkBox} key={index}>
                          <input
                            type="checkbox"
                            id={`service-${index}`}
                            value={service}
                          />
                          <label htmlFor={`service-${index}`}>{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.paraContent}>
                    <p>
                      If you require a signed Non-Disclosure Agreement (NDA),
                      please email us at <span>inquiries@bookwriting.us</span>
                    </p>
                  </div>
                  <div className={styles.contactBtn}>
                    <button
                      type="submit"
                      className="commonBtn"
                      disabled={isDisabled}
                    >
                      {formStatus}
                    </button>
                  </div>
                  {error && <p className="error-message">{error}</p>}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <CtaContact />
    </>
  );
}
