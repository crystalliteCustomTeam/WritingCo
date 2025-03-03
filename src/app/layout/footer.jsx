import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import { FacebookIcon, MainLogo, PinterestIcon, TikTokIcon, TwitterIcon, VimeoIcon, YoutubeIcon } from "@/src/app/app-constants"
import Link from "next/link"


const Footer = () => {
    return (
        <>

            <section className={`${styles.footerSection}`}>
                <Container>
                    <Row className="d-flex align-items-stretch">
                        <Col md={12} lg={4} className="ps-lg-0">
                            <div className={styles.socialBox}>
                                <div className={styles.logo}>
                                    <MainLogo />
                                </div>
                                <p>From the first word to the final sale, we’ve got you covered; writing, editing, publishing, and marketing all in one place.</p>
                                <ul className={styles.socialLinks}>
                                    <li><Link href=""><TikTokIcon /></Link></li>
                                    <li><Link href=""><FacebookIcon /></Link></li>
                                    <li><Link href=""><TwitterIcon /></Link></li>
                                    <li><Link href=""><PinterestIcon /></Link></li>
                                    <li><Link href=""><YoutubeIcon /></Link></li>
                                    <li><Link href=""><VimeoIcon /></Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} lg={8} className="pe-lg-0">
                            <div className={styles.contactLinks}>
                                <div className={styles.LinksBox}>
                                    <div className={styles.LinksItem}>
                                        <h5>Quick Links</h5>
                                        <ul>
                                            <li><Link href="/pricing">Pricing</Link></li>
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li><Link href="/blogs">Blogs</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    <div className={styles.LinksItem}>
                                        <h5>Our Services</h5>
                                        <ul>
                                            <li><Link href="/book-writing-services">Book Writing</Link></li>
                                            <li><Link href="/book-trailer-services">Book Video Trailer</Link></li>
                                            <li><Link href="/book-editing-services">Book Editing</Link></li>
                                            <li><Link href="/book-publishing-services">Book Publishing</Link></li>
                                            <li><Link href="/book-cover-design-services">Book Cover Design</Link></li>
                                            <li><Link href="/book-marketing-services">Book Marketing</Link></li>
                                            <li><Link href="/audiobook-recording-services">Audio Book</Link></li>
                                            <li><Link href="/children-book-illustrator">Children Book Illustration</Link></li>
                                            <li><Link href="/author-website-design-services">Author Website</Link></li>
                                            <li><Link href="/children-book-publication-services">Children Book Publication</Link></li>

                                        </ul>
                                    </div>
                                    <div className={styles.LinksItem}>
                                        <h5>Contact Us</h5>
                                        <ul>
                                            <li>Email: <Link href="mailto:info@bookwriting.com">info@bookwriting.com</Link></li>
                                            <li>Toll Free: <a href="tel:8666000036">866-600-0036</a></li>
                                            <li>For Sale Inquiry: <a href="tel:3024595127">(302) 459-5127</a></li>
                                            <li>For Project Inquiry: <a href="tel:3024809990">(302) 480-9990</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className={`${styles.copyRightSection}`}>
                <Container className={`${styles.bgGrayColor} h-100`}>
                    <Row className="h-100">
                        <Col md={12} lg={4} className="my-auto">
                            <div className={styles.copyItem}>
                                <h6>Head Office</h6>
                                <p>418 Broadway STE R Albany NY 12207, United States</p>
                            </div>
                        </Col>
                        <Col md={12} lg={4} className="my-auto text-center">
                            <div className={styles.copyItem}>
                                <p>© 2025 - All Rights Reserved Dreamweave Media INC</p>
                            </div>
                        </Col>
                        <Col md={12} lg={4} className="my-auto">
                            <div className={styles.copyItem}>
                                <ul className={styles.copyLinks}>
                                    <li><Link href="">Terms of Use</Link></li>
                                    <li><Link href="">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer