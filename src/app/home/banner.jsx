import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'
import BannerImg from "media/home/bannerImg.webp"
import BannerLogo from "media/home/bannerlogo.webp"
import Image from 'next/image'

const Banner = () => {
    return (
        <section className={styles.mainBanner} style={{ backgroundImage: `url(${BannerImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={8} lg={6} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <h1>Book Writing Company Behind Tomorrow’s Bestsellers!</h1>
                            <p>Turn your dream into a Bestselling book with our expert writers. We transform your vision into reality and support your publishing journey.</p>
                        </div>
                        <UniqueButton txt="Talk to a Specialist" BgBlack={true} />
                        <div className={styles.bannerLogo}>
                            <Image src={BannerLogo.src} alt="banner Image" height={28} width={560} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner