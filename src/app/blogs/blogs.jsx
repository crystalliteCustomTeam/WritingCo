import styles from "@/styles/services/blogs.module.scss"
import Image from "next/image"
import { Col, Container, Row } from 'react-bootstrap'

import Link from "next/link"


const Blogs = ({ data, blogPage }) => {
    return (
        <section className={`pt-100 ${styles.blogsSection}`}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    {data.BlogsData.map((item, index) => (
                        <Col lg={4} md={6} sm={6} key={index}>
                            <div className={styles.blogItem}>
                                <div className={styles.blogImg}>
                                    <Image src={item.img} alt="Blog Image" fill />
                                </div>
                                <div className={styles.blogTxt}>
                                    <div className={styles.categoryItem}>{item.category}</div>
                                    <h5>{item.title}</h5>
                                    <div className={styles.datatime}>{item.date} . {item.time}</div>
                                    <p>{item.txt}</p>
                                </div>

                            </div>
                        </Col>
                    ))}
                    {!blogPage ?
                        <Col md={7} className="text-center mt-5 mt-md-4 m-auto">
                            <Link href="/blogs" className="commonBtn">View All Blogs</Link>
                        </Col>
                        :
                        null
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Blogs