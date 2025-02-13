import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/services/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'

const Banenr = ({ data }) => {
    return (
        <section className={styles.bannerBlogSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="mx-auto mt-auto text-center">
                        <div className={styles.bannerTxt}>
                            <h1>{data.title}</h1>
                            <p>{data.txt}</p>
                            <UniqueButton txt="Talk to a Specialist" BgBlack={true} center={true} />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banenr