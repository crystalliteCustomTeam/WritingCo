import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'
import Image from 'next/image'
import BannerImg from "media/about/bannerImg.webp"
import BannerLogo from "media/home/bannerlogo.webp"

const Banenr = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={5} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <h1>Who Are We?</h1>
                            <p>As self-searching as this question might sound, we are a book writing, editing, and publishing company. Well, that sounds a bit too over-simplified, but you get the gist. We produce, publish, and market book, a synergy of creativity fueled by a staff of writers, editors, publishers, developers, and designers.</p>
                            <UniqueButton txt="Talk to a Specialist" />
                        </div>
                        <div className={styles.bannerLogo}>
                            <Image src={BannerLogo.src} alt="banner Image" height={28} width={560} />
                        </div>
                    </Col>
                    <Col md={6} lg={7} className="mt-auto text-center">
                        <div className={styles.banneerImage}>
                            <Image src={BannerImg.src} alt="banner Image" height={747} width={667} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banenr