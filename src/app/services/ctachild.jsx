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
                                <h2>Feeling Stuck? Talking To Us Can Help You</h2>
                                <p>Have questions about children's book illustrations? Our award-winning team is here to provide customized solutions tailored to your needs for your next bestseller.</p>
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