"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { PlusFaqIcon } from "@/src/app/app-constants";

export const FAQsData = {
    subtitle: "FAQs",
    title: "Frequently Asked Question?",

    Fqaslist: [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

    ]

}
const Faqs = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">FAQs</div>
                        <h2>Frequently Asked Question?</h2>
                    </Col>
                    <Col xl={12} lg={12} md={12} >
                        {FAQsData.Fqaslist.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusFaqIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faqs;
