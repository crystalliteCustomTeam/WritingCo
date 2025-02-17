import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/getquote.module.scss"
import Image from "next/image"
import ContactImg from "media/home/contactus.webp"
import ContactFrom from "@/src/app/components/contactfrom"


const GetQuote = () => {
    return (
        <section className={`${styles.getquoteSection} pt-100`}>
            <Container className={styles.bgGrayColor}>
                <Row>
                    <Col md={6} lg={6}>
                        <h2>Ready to Publish Your Book?</h2>
                        <p>Take the next step in your publishing journey! Get in touch with our expert team today, and let’s bring your book to a targeted audience. Whether you need guidance on writing, editing, publishing, or marketing, we’re here to answer your questions and support you every step of the way.</p>
                        <Image src={ContactImg.src} alt="Contact Image" width={745} height={360} />
                    </Col>
                    <Col md={6} lg={6} xl={5} className="offset-xl-1">
                        <h4>Let’s Bring Your Vision to Life!</h4>
                        <ContactFrom />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetQuote