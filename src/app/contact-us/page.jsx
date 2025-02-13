
"use client"
import { Col, Container, Form, Row } from "react-bootstrap"
import styles from "@/styles/contact/contactus.module.scss"
import CtaContact from "@/src/app/contact-us/ctacontact";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export default function Page() {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [formStatus, setFormStatus] = useState("Submit");
    const [error, setError] = useState('');

    // Load IP address from the API
    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };
    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setFormStatus("Processing...");
        setIsDisabled(true);

        // Validate fields
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const phone = e.target.phone.value.trim();
        const message = e.target.comment.value.trim();


        if (!name || !email || !phone) {
            setError('Please fill in all required fields.');
            setFormStatus("Submit");
            setIsDisabled(false);
            return;
        }

        const currentdate = new Date().toLocaleString();
        const data = {
            page_url: pagenewurl,
            user_ip: `${ip.ip}`,
            lead_data: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.comment.value,
            }
        };
        const JSONdata = JSON.stringify(data);
        // First API call to your server
        await fetch('https://brandsapi.pulse-force.com/api/v1/leads', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            window.location.href = '/thank-you';
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });
    };
    return (
        <>
            <section className={`${styles.contactSection} pt-100`}>
                <Container>
                    <Row>
                        <Col md={11} lg={10} xl={8} className="m-auto">
                            <h1>Elevate your book. Get published.</h1>
                            <Form>
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
                                        <label>Are you a?</label>
                                        <div className={styles.radioBtn}>
                                            <label>
                                                <input type="radio" name="person" value="Author" />Author
                                            </label>
                                            <label>
                                                <input type="radio" name="person" value="Publisher" />Publisher
                                            </label>
                                            <label>
                                                <input type="radio" name="person" value="Other" />Other
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div className={styles.tit}>Services</div>
                                        <div className={styles.checkContainer}>
                                            {['Editing', 'Proofreading', 'Book Formatting', 'Cover Design', 'Marketing', 'Consulting'].map((service, index) => (
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
                                        <p>You may find our confidentiality policy here , or <span>request a signed NDA by email: info@bookwriting.us</span>. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service Terms of Service apply.</p>
                                    </div>
                                    <div className={styles.contactBtn}>
                                        <button type="submit" name="submit" className="commonBtn" disabled={isDisabled}>{formStatus}</button>
                                    </div>
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
