import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/team.module.scss"
import IMG01 from "media/services/children-book-illustrator/team/1.webp"
import IMG02 from "media/services/children-book-illustrator/team/2.webp"
import IMG03 from "media/services/children-book-illustrator/team/3.webp"
import IMG04 from "media/services/children-book-illustrator/team/4.webp"
import Image from "next/image"

const data = [
    {
        title: "Increased Sales",
        img: IMG01.src
    },
    {
        title: "Audience-Oriented Content",
        img: IMG02.src
    },
    {
        title: "Device Compatibility",
        img: IMG03.src
    },
    {
        title: "Easy To Upload",
        img: IMG04.src
    }
]
const Team = () => {
    return (
        <section className={`${styles.ourteamSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={8} className="m-auto text-center">
                        <h2>Let Our Children’s Book Publishing Team Help You</h2>
                        <p>Sketching childrens book characters is not everyone’s feat. From the book-length to a well-instilled message, have a hassle-free experience at Book Writing.</p>
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