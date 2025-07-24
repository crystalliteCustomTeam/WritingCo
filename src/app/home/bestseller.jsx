"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/bestseller.module.scss"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import SliderArrow from "@/src/app/components/sliderarrow";
import Autoplay from 'embla-carousel-autoplay'
import { usePathname } from "next/navigation";


import Img01 from "media/home/book/book1.webp"
import Img02 from "media/home/book/book2.webp"
import Img03 from "media/home/book/book3.webp"
import Img04 from "media/home/book/book4.webp"
import Img05 from "media/home/book/book5.webp"
import Img06 from "media/home/book/book6.webp"
import Img07 from "media/home/book/book7.webp"
import Img08 from "media/home/book/book8.webp"
import Img09 from "media/home/book/book9.webp"
import Img10 from "media/home/book/book10.webp"
//Industries 
import Img1 from "media/portfolio/illustrator/1.webp"
import Img2 from "media/portfolio/illustrator/2.webp"
import Img3 from "media/portfolio/illustrator/3.webp"
import Img4 from "media/portfolio/illustrator/4.webp"
import Img5 from "media/portfolio/illustrator/5.webp"
import Img6 from "media/portfolio/illustrator/6.webp"
import Img7 from "media/portfolio/illustrator/7.webp"

const OPTIONS = { loop: true, align: 'start' }
export const IndustryItem = [
    {
        title: "The Heroes & Heroines of the Snake War",
        title: "Attention Earthlings!",
        txt: "",
        Img: Img01.src,
        url: "#",
    },
    {
        title: "The Pssst-Pssst of Toley Ranz",
        title: "The Imaginary Adventures of Evan Lincoln",
        txt: "",
        Img: Img02.src,
        url: "#",
    },
    {
        title: "Exotic Bomb",
        title: "Seaside & Seashells: Sara's Trip To The Jersey Shore",
        txt: "",
        Img: Img03.src,
        url: "#",
    },
    {
        title: "The Girl With Lots Of Spots And Dots",
        title: "What's Making Those Noises?",
        txt: "",
        Img: Img04.src,
        url: "#",
    },

    {
        title: "Within You And Without You",
        title: "The Tube Fairy Visits Peanut the Hound Dog",
        txt: "",
        Img: Img05.src,
        url: "#",
    }
    ,
    {
        title: "A Deadly Recompense",
        title: "Bobby and Dr. G: The Secret Map to the Mountain Top",
        txt: "",
        Img: Img06.src,
        url: "#",
    },
    {
        title: "A Soldier & His Wife's Journey",
        title: "Oscar's Adventures",
        txt: "",
        Img: Img07.src,
        url: "#",
    },
    {
        title: "Mental Fitness For Tweens And Teens",
        txt: "",
        Img: Img08.src,
        url: "#",
    }
    ,
    {
        title: "Beyond the Banks of Frog Creek",
        txt: "",
        Img: Img09.src,
        url: "#",
    }
    ,
    {
        title: "The Devil and the Details",
        txt: "",
        Img: Img10.src,
        url: "#",
    }


]
export const IndustryItem1 = [
    {
        title: "Attention Earthlings!",
        txt: "",
        Img: Img1.src,
        url: "#",
    },
    {
        title: "The Imaginary Adventures of Evan Lincoln",
        txt: "",
        Img: Img2.src,
        url: "#",
    },
    {
        title: "Seaside & Seashells: Sara's Trip To The Jersey Shore",
        txt: "",
        Img: Img3.src,
        url: "#",
    },
    {
        title: "What's Making Those Noises?",
        txt: "",
        Img: Img4.src,
        url: "#",
    },

    {
        title: "The Tube Fairy Visits Peanut the Hound Dog",
        txt: "",
        Img: Img5.src,
        url: "#",
    }
    ,
    {
        title: "Bobby and Dr. G: The Secret Map to the Mountain Top",
        txt: "",
        Img: Img6.src,
        url: "#",
    },
    {
        title: "Oscar's Adventures",
        txt: "",
        Img: Img7.src,
        url: "#",
    },

]



const BestSeller = ({ innerPage, landing, data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    const pathname = usePathname();

    // Check URL and select data
    const sliderData = pathname?.includes("children-book-illustrator")
        ? IndustryItem1
        : IndustryItem;


    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`${styles.bestsellerSection} ${innerPage ? styles.innerPageSection : ""} ${landing ? styles.landingSection : ""}  pt-100`}>
            <Container>
                <Row>
                    <Col md={10} className={landing ? "text-center m-auto" : ""}>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                    {!landing ?
                        <Col md={2} className="mt-auto d-none d-md-block">

                            <SliderArrow
                                onPrev={prevButtonHandler}
                                onNext={nextButtonHandler}
                            />
                        </Col>
                        : null
                    }
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {sliderData.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.industriesImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} width={1800} height={2700} />
                                                <div className={styles.industriesContent}>
                                                    <h4>{item.title}</h4>
                                                    {!landing ? (
                                                        <>
                                                            {/* <p>{item.txt}</p> */}
                                                            <div className={styles.btnReaMore}>
                                                                Visit Amazon
                                                            </div>
                                                        </>
                                                    )
                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    {!landing ?
                        <Col md={12} className="mt-auto d-sm-block d-md-none">
                            <SliderArrow
                                onPrev={prevButtonHandler}
                                onNext={nextButtonHandler}
                            />
                        </Col>
                        : null
                    }
                </Row>

            </Container>
        </section>
    )
}

export default BestSeller