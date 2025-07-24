"use client"
import styles from "@/styles/components/contactform.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap"


const ContactFrom = ({ lp2, vertical, txt, popop }) => {
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
        const comment = e.target.comment?.value || "";

        if (!name || !email || !phone) {
            setError("Please fill in all required fields.");
            setFormStatus("Submit");
            setIsDisabled(false);
            return;
        }


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
            location,
            page_url: pagenewurl,
        };

        try {
            // Submit to Google Sheets (internal API)
            await fetch("/api/contact-from", {
                body: JSON.stringify(payload),
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Submit to External Email API
            await fetch("https://api.infinitidigital.us/api/send-brandemail", {
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
                        ip: location.ip,
                        country: location.country,
                        city: location.city,
                        url: pagenewurl,
                    },
                }),
            });

            window.location.href = "/thank-you";
        } catch (err) {
            console.error("Error submitting form:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setFormStatus("Submit");
            setIsDisabled(false);
        }
    };



    return (
        <Form onSubmit={handleSubmit}>
            <div className={`${styles.Contactbox} ${lp2 ? styles.lp2From : ""} ${popop ? styles.popop : ""} ${vertical ? styles.verticalFrom : ""} `}>
                <div className={styles.contactItem}>
                    <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className={styles.contactItem}>
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div className={styles.contactItem}>
                    <input type="Phone" placeholder="Phone" name="phone" required />
                </div>
                {!vertical ? (
                    <>
                        <div className={styles.contactItem}>
                            <textarea placeholder="Description" name="comment"></textarea>
                        </div>
                        <div className={styles.para}>
                            We take your privacy seriously. Read our <Link href="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </>
                ) : null}
                <div className={styles.contactBtn}>
                    <button
                        type="submit"
                        className="commonBtn"
                        disabled={isDisabled}
                    >
                        {formStatus}
                    </button>
                </div>
            </div>
        </Form >
    )
}

export default ContactFrom