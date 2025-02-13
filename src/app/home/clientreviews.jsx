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
        txt: "If you are looking for professional writers, I highly recommend the Book Writing services.Affordable prices.Mark Rivera and his team are superb! They explained the entire.process before starting my manuscript and are guiding me in every step.I am very pleased with their work.",
        image: Img01.src,
        namee: "Sharon Mondier",
        job: "United State Of America",
    },
    {
        txt: "This was my first book to be published, I was extremely nervous, I wasn’t sure I could trust the company I was sending my money to. Book Writing has EXCEEDED my expectations. Mark and his team are/were very attentive to my requests, they have presented several illustrations based on my vision, they have edited and presented ideas to make my story stronger, I could not be more pleased with their honesty and their commitment. Getting a book published is no easy task and I have procrastinated for years due to uncertainty. I’m now relieved that I trusted this team to do as they said and they have.",
        image: Img02.src,
        namee: "Elizabeth Waldorf",
        job: "United State Of America",
    },
    {
        txt: "This is the first time I’ve worked with Book Writing and I’m happy that I chose to work with them. I am self-publishing my book for the first time and I didn’t know what to expect. To be honest I happen to come by Book Writing by accident. I was researching websites that helped with self-publishing and I clicked on it and accidentally clicked on the chat icon. Someone responded and at first I didn’t write anything back. But then I decided to take a chance and the person I talked to put me in contact with Mark Rivera. Mark and his team have been very helpful during this whole process. They take my suggestions and show me where I can make improvements.",
        image: Img03.src,
        namee: "Ana",
        job: "United State Of America",
    },
    {
        txt: "This is a fantastic business! Their editing team did a great job on the design of the book cover, and formatting of the text for uploading onto KDP for print and ebook made it feasible for me to swiftly self-publish my book. Their staff was quick to reply to my queries, sometimes the same day, and provided me with excellent advice throughout. Furthermore, in comparison to many other publishing firms, their services were inexpensive. I'd recommend them to everybody who's just started out with their writing career!",
        image: Img04.src,
        namee: "Mark M. Cole",
        job: "United State Of America",
    },
    {
        txt: "BWC made my first book experience really easy. Mark was there with me whenever I had questions or revisions to be made and just overall helpful. His team is supremely skillful and so their illustrations are one of the best I've seen so far! BWC bought my characters to life in a way I couldn't have imagined. I'd recommend Book Writing to everyone now!",
        image: Img05.src,
        namee: "Jason Bill",
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