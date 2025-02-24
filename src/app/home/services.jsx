import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/services.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"


const Services = ({ data, offer, landing }) => {
    return (
        <section className={`${styles.serviceSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="mx-auto text-center">
                        {data.subtitle ? <div className="subtitle">{data.subtitle}</div> : ""}
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={`${styles.servicesContainer} ${offer ? styles.serviceOffer : ""} `}>
                            {data.ServicesItem.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <div className={styles.servicesImage}>
                                        <h3 className={styles.title}>{item.title}</h3>
                                        {!landing ?
                                            <div className={styles.readMore}>
                                                <UniqueButton txt="Let’s Connect" SimpleBtn={true} />
                                            </div>
                                            : ""
                                        }
                                        <p>{item.txt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </Col>
                    <Col md={12} className={landing ? "mt-4" : ""} >
                        {landing ?
                            <UniqueButton txt="Connect with a Book Consultant" OneBtn={true} center={true} />
                            : ""
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services