"use client"
import useEmblaCarousel from 'embla-carousel-react'
import SliderArrow from "@/src/app/components/sliderarrow";
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/home/clientsreviews.module.scss"
import Img01 from "media/home/ClientReviews/1.webp"
import Img02 from "media/home/ClientReviews/2.webp"
import Img03 from "media/home/ClientReviews/3.webp"
import Img04 from "media/home/ClientReviews/4.webp"
import Img05 from "media/home/ClientReviews/5.webp"
import Image from "next/image"



const OPTIONS = { loop: true, align: 'center' }
const clientReviews = [
    {
        txt: "As a first-time author, I was overwhelmed by the publishing process. The team provided exceptional guidance, from editing to a stunning cover design. Their marketing strategy propelled my book to bestseller status in its category. I couldn't have asked for a better partner in bringing my vision to life.",
        image: Img01.src,
        namee: "Dr. Emily Thompson",
        job: "United State Of America",
    },
    {
        txt: "Having had a disappointing experience with another publisher, I was apprehensive about self-publishing. This team restored my faith with their professionalism and expertise. They handled everything seamlessly. Thankful for the team.",
        image: Img02.src,
        namee: "Michael Richards",
        job: "United State Of America",
    },
    {
        txt: "The personalized approach taken by the team made all the difference. They took the time to understand my story and audience, resulting in a beautifully created book that resonates with readers. Their ongoing support has been invaluable in post-publication marketing.",
        image: Img03.src,
        namee: "Samantha Lee",
        job: "United State Of America",
    },
    {
        txt: "The comprehensive services offered covered all my needs, from editing to distribution. Their knowledge of the industry is impressive, and their commitment to my project's success was evident at every step. I highly recommend their services to any author looking to make an impact.",
        image: Img04.src,
        namee: "David Foster",
        job: "United State Of America",
    },
    {
        txt: "Working with this team was a game-changer. Their design team created a captivating cover, and the marketing efforts led to impressive sales numbers. The entire process was smooth, and I felt supported throughout. I'm already planning my next project with them.",
        image: Img05.src,
        namee: "Rachel Adams",
        job: "United State Of America",
    }
]


const ClientReviews = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <div className={styles.clientsReviews}>
            <div className={styles.clientsReviewsHeader}>
                <ul>
                    {clientReviews.map((item, index) => (
                        <li key={index}>
                            <Image src={item.image} alt={item.namee} fill />
                        </li>
                    ))}
                </ul>
                <div className={styles.clientTrust}>
                    Trusted by <span>world leading companies</span>
                </div>
            </div>
            <div className={styles.clientsReviewsBody}>
                <div className={styles.embla}>
                    <div className={styles.embla__viewport} ref={emblaRef}>
                        <div className={styles.embla__container}>
                            {clientReviews.map((item, index) => (
                                <div className={styles.embla__slide} key={index}>
                                    <div className={styles.clientsComments}>
                                        <p>{item.txt}</p>
                                        <div className={styles.info}>
                                            {item.namee}
                                            <span>{item.job}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <SliderArrow
                    onPrev={prevButtonHandler}
                    onNext={nextButtonHandler}
                />
            </div>
        </div>
    )
}

export default ClientReviews