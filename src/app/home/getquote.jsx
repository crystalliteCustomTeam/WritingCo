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
                        <div className="subtitle">Contact Us</div>
                        <h2>Request A Free Quote</h2>
                        <p>If you’d like to chat about working on a project together, or learn more about working with me, get in touch!</p>
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