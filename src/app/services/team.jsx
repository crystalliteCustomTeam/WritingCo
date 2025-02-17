import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/team.module.scss"
import IMG01 from "media/services/children-book-illustrator/team/1.webp"
import IMG02 from "media/services/children-book-illustrator/team/2.webp"
import IMG03 from "media/services/children-book-illustrator/team/3.webp"
import IMG04 from "media/services/children-book-illustrator/team/4.webp"
import Image from "next/image"

const data = [
    {
        title: "Creative Control",
        img: IMG01.src
    },
    {
        title: "Professional Expertise",
        img: IMG02.src
    },
    {
        title: "Market Reach",
        img: IMG03.src
    },
    {
        title: "Quality Assurance",
        img: IMG04.src
    }
]
const Team = () => {
    return (
        <section className={`${styles.ourteamSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={8} className="m-auto text-center">
                        <h2>Partner with Our Children's Book illustration Experts</h2>
                        <p>Perfecting the balance of fun and meaning in a children’s book requires expertise—our team makes it effortless for you.</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.teamContainer}>
                            {data.map((item, index) => (
                                <div className={styles.teamItem} key={index}>
                                    <div className={styles.ImageBox}>
                                        <Image src={item.img} alt={item.title} width={415} height={500} />
                                    </div>
                                    <div className={styles.titleBox}>
                                        <h6>{item.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Team