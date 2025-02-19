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
                        <h2>Stop Staring at That Blank Page.</h2>
                        <p>Don’t let your story stay trapped in your head.<br className="d-md-block d-none" />
                            It deserves more than a ‘someday.’<br className="d-md-block d-none" />
                            <strong>Today is that day! </strong><br className="d-md-block d-none" />
                            Let’s get your book written, published, and out in the world :)
                        </p>
                        <p></p>
                        <p></p>
                        <Image src={ContactImg.src} alt="Contact Image" width={745} height={360} />
                    </Col>
                    <Col md={6} lg={6} xl={5} className="offset-xl-1">
                        <h4>Tell us about your Book! </h4>
                        <ContactFrom />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetQuote