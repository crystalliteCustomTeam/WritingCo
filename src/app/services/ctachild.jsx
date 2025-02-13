import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/ctachild.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import BgIMG from "media/services/children-book-illustrator/childBg.webp"
import ChildIMG from "media/services/children-book-illustrator/childImg.webp"
import Image from "next/image"

const CtaChild = () => {
    return (
        <section className={`${styles.ctaChildSection} pt-100`}>
            <Container className={styles.bgChild} style={{ backgroundImage: `url(${BgIMG.src})` }}>
                <Row>
                    <Col md={12} lg={12}>
                        <div className={styles.ctaContainer} >
                            <div className={styles.ctaTxt}>
                                <h2>Talk To Us Today!</h2>
                                <p>Your hows, whats, and whys of children’s book illustrations answered with our award-winning book illustration services customized to your needs</p>
                                <UniqueButton txt="Talk to a Specialist" BgBlack={true} />
                            </div>
                            <div className={styles.ctaImg}>
                                <Image src={ChildIMG.src} alt="Talk To Us Today" fill />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CtaChild