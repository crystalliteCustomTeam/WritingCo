"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/journey.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import useEmblaCarousel from 'embla-carousel-react'
import Img01 from "@/public/landing/lp1/slider/Img01.webp"
import Img02 from "@/public/landing/lp1/slider/Img02.webp"
import Img03 from "@/public/landing/lp1/slider/Img03.webp"
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS = { loop: true, align: 'start' }
const data = [
    {
        title: "Manuscript Evaluation",
        txt: "Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.",
        img: Img01.src,
    },
    {
        title: "Book Editing",
        txt: "Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.",
        img: Img02.src,
    },
    {
        title: "Proofreading",
        txt: "Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.",
        img: Img03.src,
    },
    {
        title: "Manuscript Evaluation",
        txt: "Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.",
        img: Img01.src,
    },
    {
        title: "Book Editing",
        txt: "Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.",
        img: Img02.src,
    },
    {
        title: "Proofreading",
        txt: "Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.",
        img: Img03.src,
    }
]
const Journey = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    return (
        <>
            <section className={`${styles.journeyTitle} pt-100`}>
                <Container>
                    <Row>
                        <Col md={10} lg={9} className="m-auto text-center">
                            <h2>Your Publishing Journey Start Here</h2>
                            <p>Know this: not many authors secure any deal with the publishers. But at Book Writing, we help you connect and collaborate with high-profile publishers and Children's Book Publishing experts.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.journeySection} pt-100`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={12}>
                            <div className={styles.journeyContainer}>
                                <div className={styles.contentSection}>
                                    <h2>Professional Self Publishing Services</h2>
                                    <p>Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss.</p>
                                    <p>Oftentimes, we find ourselves indulging in thoughts that others might fascinating. Most of them remain limited to the abyss. Oftentimes, we find ourselves indulging.</p>
                                    <UniqueButton txt="Talk to a Specialist" />
                                </div>
                                <div className={styles.sliderSection}>
                                    <div className={styles.embla}>
                                        <div className={styles.embla__viewport} ref={emblaRef}>
                                            <div className={styles.embla__container}>
                                                {data.map((item, index) => (
                                                    <div className={styles.embla__slide} key={index}>
                                                        <div className={styles.imgBox}>
                                                            <Image src={item.img} alt={item.title} fill />
                                                        </div>
                                                        <div className={styles.txtBox}>
                                                            <h4>{item.title}</h4>
                                                            <p>{item.txt}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Journey