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
                        <h2>Contact Us</h2>
                        <p>Ready to publish your book? Get in touch with us today and let’s bring your book to a targeted audience. Our team is here to guide you through the publishing process and answer any questions you may have</p>
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