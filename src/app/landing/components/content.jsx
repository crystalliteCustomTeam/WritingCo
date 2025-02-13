import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import Image from "next/image"
import { TickBox } from "@/src/app/app-constants"

const ContentBox = ({ data, alternet }) => {
    return (
        <section className={`${styles.contentSection} ${alternet ? styles.alternetSec : ""}`}>
            <Container>
                <Row>
                    <Col md={6} lg={6} className={`${alternet ? "order-md-2 my-auto" : "my-auto"}`}>
                        <Image src={data.img} alt="Banner Logo" width={700} height={700} />
                    </Col>
                    <Col md={6} lg={5} className={`${alternet ? "order-md-1 my-auto offset-lg-1" : "my-auto offset-lg-1"}`}>
                        <h2>{data.title}</h2>
                        <p>Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.</p>
                        <ul>
                            {data.contentPoints.map((item, index) => (
                                <li key={index}><TickBox />{item}</li>
                            ))}
                        </ul>
                        <UniqueButton txt="Talk to a Specialist" BgBlack={alternet ? false : true} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentBox
