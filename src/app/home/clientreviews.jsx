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
        txt: "I had the idea, but I couldn't find the right words. The ghostwriter did an amazing job! She was super easy to work with and always kept me in the loop, so the final product felt like it was really my story.",
        image: Img01.src,
        namee: "Mark D",
        job: "Author of Chasing Dreams",
    },
    {
        txt: "I was really stuck with my manuscript, and the editing team helped me get it together. They didn’t just fix the grammar, they made sure the flow of my story worked. My book now feels more cohesive, and I feel so much better about putting it out there.",
        image: Img02.src,
        namee: "Sarah L.",
        job: "Author of Heart's Journey",
    },
    {
        txt: "The book marketing team helped me set up everything from social media posts to launching ads. I didn't have huge expectations, but my book actually got attention and I definitely sold a lot of copies. Absolutely worth the investment!",
        image: Img03.src,
        namee: "Rachel W.",
        job: "Author of The Last Song",
    },
    {
        txt: "I was totally lost when it came to publishing on Amazon. The team helped me format my manuscript, upload it to Kindle Direct Publishing, and make sure everything was in order. They also helped optimize my book description and keywords, which really made a difference in visibility. The process was much smoother than I expected, and I’m thrilled with how it turned out.",
        image: Img04.src,
        namee: "Chris B.",
        job: "Author of Code Breaker",
    }
]

const clientReviewsLp = [
    {
        txt: "I always dreamed of publishing my own book, but the process felt overwhelming. That’s when I found this amazing team! From editing to publishing, they guided me through every step. The best part? Their marketing strategies helped my book reach #1 in its category! I couldn’t have done it without them.",
        image: Img01.src,
        namee: "Jenna Duarte",
        job: "Fiction Author",
    },
    {
        txt: "Writing a book was the easy part—getting it published and marketed was another story. The team handled everything, from formatting to distribution, and made sure my book landed in the hands of the right readers. I’m beyond grateful for their expertise and support.",
        image: Img02.src,
        namee: "Alva Singleton",
        job: "Nonfiction Writer",
    },
    {
        txt: "I wanted to bring my children's book to life with beautiful illustrations and a polished look. This team exceeded my expectations! They connected me with talented illustrators and handled the publishing process with care. Seeing my book in readers’ hands has been the most rewarding experience.",
        image: Img03.src,
        namee: "Shelly Weber",
        job: "Children's Book Author",
    },
    {
        txt: "After two failed attempts at self-publishing, I was ready to give up. Then, I found this team. They took my book, refined it, and helped me launch with an incredible marketing campaign. Now, my book is gaining traction, and I’m finally seeing the success I dreamed of. If you're an indie author, this is the team you need.",
        image: Img04.src,
        namee: "Ivy Dominguez",
        job: "Romance Novelist",
    },
]

const ClientReviews = ({ lp2 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })]);

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
                            {lp2 ? (
                                clientReviewsLp.map((item, index) => (
                                    <div className={styles.embla__slide} key={index}>
                                        <div className={styles.clientsComments}>
                                            <p>{item.txt}</p>
                                            <div className={styles.info}>
                                                {item.namee}
                                                <span>{item.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                clientReviews.map((item, index) => (
                                    <div className={styles.embla__slide} key={index}>
                                        <div className={styles.clientsComments}>
                                            <p>{item.txt}</p>
                                            <div className={styles.info}>
                                                {item.namee}
                                                <span>{item.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <SliderArrow
                    onPrev={prevButtonHandler}
                    onNext={nextButtonHandler}
                />
            </div>
        </div>
    );
};

export default ClientReviews;
