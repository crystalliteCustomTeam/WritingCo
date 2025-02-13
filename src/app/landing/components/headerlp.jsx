import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/headerlp.module.scss"
import { MainLogo } from "@/src/app/app-constants"

const Headerlp = () => {
    return (
        <section className={styles.headerLp}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.logoSec}>
                            <MainLogo />
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.headerBtn}>
                            <div className={styles.contactBtn}>Talk to a Specialist</div>
                            <div className={styles.chatBtn}>866-600-0036</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Headerlp