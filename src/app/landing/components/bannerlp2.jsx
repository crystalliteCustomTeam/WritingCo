import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/banner.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import Logo from "media/landing/lp1/Logo.webp"
import BannerImage from "media/landing/lp2/bannerImg.webp"
import bannerBg from "media/landing/lp1/bannerBg.webp"
import Image from "next/image"

const BannerLp2 = ({ lp2 }) => {
    return (
        <section className={styles.landingBanner} style={{ backgroundImage: `url(${bannerBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={12} className="mx-auto mt-auto">
                        <div className={`${styles.banenrContainer} ${lp2 ? styles.bannerLp2 : ""}`}>
                            <div className={styles.bannerTxt}>
                                <h1>Your Story, Our Expert Ghostwriters: Let’s Write Something the World Won’t Forget</h1>
                                <p>From ghostwriting to publishing, Our professional book writing company help you write and launch your book while keeping your creative voice intact.</p>
                                <UniqueButton txt="Talk to a Specialist" />
                                <div className={styles.logoImg}>
                                    <Image src={Logo.src} alt="Banner Logo" width={2228} height={112} />
                                </div>
                            </div>
                            <div className={styles.bannerImg}>
                                <Image src={BannerImage.src} alt="Banner Logo" width={504} height={792} />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerLp2
