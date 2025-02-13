import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/story.module.scss"
import storyImg from "@/public/home/storyImg.webp"


const Story = () => {
    return (
        <section className={`${styles.storySection} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="mx-auto text-center">
                        <div className="subtitle">Let us help you tell it.</div>
                        <h2>You’ve got a story to tell.</h2>
                    </Col>
                    <Col md={12}>
                        <div className={styles.storyVideo}>
                            <video
                                autoPlay
                                muted
                                loop
                                preload="auto"
                                aria-label="Background video"
                                loading="eager"
                                poster={storyImg.src}
                            >
                                <source src="https://player.vimeo.com/progressive_redirect/playback/1041229312/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0ec53fec971f7eebb1e0102946d1191fa168e6786c49deb2c780ea2ae68521bc" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Story