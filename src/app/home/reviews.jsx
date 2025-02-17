"use client"
import { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/clientsreviews.module.scss"
import ClientReviews from "./clientreviews"
import BookReviews from "./bookreview"



const Reviews = ({ lp2 }) => {
    const [activeReview, setActiveReview] = useState("book");
    return (
        <section className={`${styles.clientsReviewsSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={8}>
                        <div className="subtitle">Our Reviews</div>
                        <h2>Real Stories - Real Trust: Hear from Our Clients</h2>
                        <p>Our authors’ success stories speak to our dedication and expertise. </p>
                    </Col>
                    <Col md={12} lg={4} className='my-auto'>
                        <ul className={styles.tabReviews}>

                            <li
                                onClick={() => setActiveReview("book")}
                                className={activeReview === "book" ? styles.active : ""}
                            >
                                Book Reviews
                            </li>
                            <li
                                onClick={() => setActiveReview("client")}
                                className={activeReview === "client" ? styles.active : ""}
                            >
                                Client Reviews
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}>
                        {activeReview === "book" && <BookReviews />}
                        {activeReview === "client" && <ClientReviews lp2={lp2} />}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Reviews