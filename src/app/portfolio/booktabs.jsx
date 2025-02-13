
"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/booktabs.module.scss"
import Image from "next/image"
import Book01 from "media/portfolio/book/book1.webp"
import Book02 from "media/portfolio/book/book2.webp"
import Book03 from "media/portfolio/book/book3.webp"
import Book04 from "media/portfolio/book/book4.webp"
import Book05 from "media/portfolio/book/book5.webp"
import Book06 from "media/portfolio/book/book6.webp"
import Book07 from "media/portfolio/book/book7.webp"
import Book08 from "media/portfolio/book/book8.webp"
import Book09 from "media/portfolio/book/book9.webp"
import Book10 from "media/portfolio/book/book10.webp"
import Link from "next/link";

const data = {
    subtitle: "Our Gallery",
    title: "Our Latest Book Publishing Projects",
    desc: "Your app journey begins with a vision, and we’re here to transform it into reality. Through careful design, expert development, and seamles.",

    BookTabsItem: [
        {
            tabtitle: "Fiction",
            images: [
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book05.src,
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book10.src,
            ],
        },
        {
            tabtitle: "Non-Fiction",
            images: [
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book10.src,
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book05.src,
            ],
        },
        {
            tabtitle: "Biographies",
            images: [
                Book01.src,
                Book02.src,
                Book03.src,
                Book08.src,
                Book09.src,
                Book10.src,
                Book04.src,
                Book05.src,
                Book06.src,
                Book07.src,
            ],
        },
        {
            tabtitle: "Children’s Books",
            images: [
                Book05.src,
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book10.src,
            ],
        },
        {
            tabtitle: "Personal Stories",
            images: [
                Book06.src,
                Book07.src,
                Book08.src,
                Book09.src,
                Book10.src,
                Book01.src,
                Book02.src,
                Book03.src,
                Book04.src,
                Book05.src,
            ],
        },
    ]

}

const BookTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`pt-100 ${styles.bookTabs}`} id="PortfolioId">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabContainer}>
                            <div className={styles.tabHeader}>
                                <ul>
                                    {data.BookTabsItem.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={activeTab === index ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <span>{tab.tabtitle}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabBody}>
                                {data.BookTabsItem[activeTab].images.map((imgSrc, imgIndex) => (
                                    <div className={styles.ImageBox} key={imgIndex}>
                                        <Image src={imgSrc} alt={`Book ${imgIndex + 1}`} fill />
                                        <div className={styles.TxtBox}>
                                            <div className={styles.title}>
                                                <h5>Hidden Enemy</h5>
                                                <p>Hidden Enemy" is a suspense contemporary fiction novel that takes readers on an emotional journey of</p>
                                                <Link href="#" target="_blank">Visit on Amazon</Link>
                                            </div>
                                            <div className={styles.profile}>
                                                <div className={styles.imgBox}>
                                                    <Image src={Book01.src} alt="Book01" fill />
                                                </div>
                                                <div className={styles.imgTitle}>
                                                    Nathan B. Dodge
                                                    <span>Author</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BookTabs