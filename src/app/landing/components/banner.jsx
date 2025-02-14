import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/banner.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import Logo from "media/landing/lp1/Logo.webp"
import BannerImage from "media/landing/lp1/bannerImg.webp"
import bannerBg from "media/landing/lp1/bannerBg.webp"
import Image from "next/image"

const Banner = () => {
    return (
        <section className={styles.landingBanner} style={{ backgroundImage: `url(${bannerBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={11} className="mx-auto mt-auto">
                        <div className={styles.banenrContainer}>
                            <div className={styles.bannerImg}>
                                <Image src={BannerImage.src} alt="Banner Logo" width={577} height={1024} />
                            </div>
                            <div className={styles.bannerTxt}>
                                <h1>Your Story Is Unique Let’s Give It the Spotlight It Deserves</h1>
                                <p>Our publishing experts provide everything you need, from professional editing and sleek cover designs to strategic marketing that ensures your book stands out. </p>
                                <UniqueButton txt="Talk to Specialist" />
                                <div className={styles.logoImg}>
                                    <Image src={Logo.src} alt="Banner Logo" width={2228} height={112} />
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
