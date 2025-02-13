import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/whychoose.module.scss"


const WhyChoose = ({ data, spcring }) => {
    return (
        <section className={`${styles.whychooseSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="mx-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                    <Col md={12}>
                        <div className={`${spcring ? styles.Spcring : ""} ${styles.whychooseContainer}`}>
                            <div className={styles.whychooseImg}>
                                <img src={data.img} alt="Book Image" width={1428} height={958} />
                                {data.ProcessDataItem.map((item, index) => (
                                    <div className={`${styles.whychooseBox} ${styles[`box${index + 1}`]}`} key={index}>
                                        {item.title}
                                        <div className={styles.number}>
                                            0{index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose

