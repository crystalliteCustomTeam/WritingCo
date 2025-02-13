import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/contact/ctaconttact.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import BgIMG from "media/contact/bgContact.webp"

const CtaContact = () => {
    return (
        <section className={`${styles.ctaContactSection} pt-100`}>
            <Container className={`h-100 ${styles.bgContact}`} style={{ backgroundImage: `url(${BgIMG.src})` }}>
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.ctaTxt}>
                            <h2>We Provide Everything You Need to Achieve Your Publishing Goals.</h2>
                            <p>Let’s talk about how we can make your book a success.</p>
                            <UniqueButton txt="Talk to a Specialist" BgBlack={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CtaContact