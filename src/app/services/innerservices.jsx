import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/services/innerservice.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"

const InnerServices = ({ data }) => {
    return (
        <section className={`${styles.innerServices} pt-100`}>
            <Container>
                <Row>
                    <Col md={6} lg={5}>
                        <div className={styles.scrollingTitle}>
                            <h3>{data.title}</h3>
                            <p>{data.txt}</p>
                            <UniqueButton txt="Schedule a Consultation" BgBlack={true} />
                        </div>
                    </Col>
                    <Col md={6} lg={6} className="offset-lg-1">
                        <div className={styles.scrollingBox}>
                            {data.InnerServicesItem.map((item, index) => (
                                <div className={styles.scrollingItem} key={index}>
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InnerServices