"use client"
import styles from "@/styles/components/contactform.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap"
import { usePathname } from 'next/navigation'

const ContactFrom = ({ lp2, vertical, txt }) => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [formStatus, setFormStatus] = useState('Submit');
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
        <Form onSubmit={handleSubmit}>
            <div className={`${styles.Contactbox} ${lp2 ? styles.lp2From : ""}  ${vertical ? styles.verticalFrom : ""} `}>
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
                            We take your privacy seriously. Read our <Link href="#">Privacy Policy</Link>
                        </div>
                    </>
                ) : null}
                <div className={styles.contactBtn}>
                    <button type="submit" className="commonBtn" disabled={isDisabled}>
                        {txt ? txt : formStatus}
                    </button>
                </div>
            </div>
        </Form >
    )
}

export default ContactFrom