import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/gallery.module.scss"
import IMG01 from "media/services/children-book-illustrator/gallery/img01.webp"
import IMG02 from "media/services/children-book-illustrator/gallery/img02.webp"
import IMG03 from "media/services/children-book-illustrator/gallery/img03.webp"
import IMG04 from "media/services/children-book-illustrator/gallery/img04.webp"
import IMG05 from "media/services/children-book-illustrator/gallery/img05.webp"
import IMG06 from "media/services/children-book-illustrator/gallery/img06.webp"
import IMG07 from "media/services/children-book-illustrator/gallery/img07.webp"
import IMG08 from "media/services/children-book-illustrator/gallery/img08.webp"
import IMG09 from "media/services/children-book-illustrator/gallery/img09.webp"
import Image from "next/image"


const data = [
    IMG01.src,
    IMG02.src,
    IMG03.src,
    IMG04.src,
    IMG05.src,
    IMG06.src,
    IMG07.src,
    IMG08.src,
    IMG09.src
];
const Gallery = () => {
    return (
        <section className={`${styles.gallerySection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={8} className="m-auto text-center">
                        <h2>Some Of Our Best Children’s Book Illustrations</h2>
                        <p>From fantasy book illustrations to a modern-day fairy tale, check out Book Writing captivating work, which is a must-have!</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.galleryContainer}>
                            {data.map((item, index) => (
                                <div className={styles.galleryItem} key={index}>
                                    <Image src={item} alt="Talk To Us Today" fill />
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Gallery