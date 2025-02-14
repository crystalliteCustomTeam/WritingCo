import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/headerlp.module.scss"
import { ChatIcon, MainLogo, PhoneIcon } from "@/src/app/app-constants"

const Headerlp = () => {
    return (
        <section className={styles.headerLp}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} md={6} lg={6} className="my-auto">
                        <div className={styles.logoSec}>
                            <MainLogo />
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={6} className="my-auto">
                        <div className={styles.headerBtn}>
                            <div className={styles.chatBtn}><PhoneIcon />866-600-0036</div>
                            <div className={styles.contactBtn}><ChatIcon />Chat Now</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Headerlp