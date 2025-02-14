import BannerImg from "media/services/book-publishing-services/bannerImage.webp"
export const BannerData = {
    title: "Make Your Book Stand Out with Our Book Publishing Services",
    txt: "Our Book Publishing Services provide everything you need to publish professionally—without frustration. From editing and design to ISBN registration and global distribution, we handle every detail. Whether you’re a first-time author or an experienced writer, we make the process simple, transparent, and effective. With our team by your side, your book will not only be published—it will be positioned for success.",
    img: BannerImg.src
}

export const InnerServicesData = {
    title: "Choosing the Right Publishing Path Matters",
    txt: "The book publishing process is filled with many options, but not all of them work in an author’s best interest. Some publishing routes come with hidden costs, rights issues, or limited distribution. Choosing the right path is critical to ensuring your book’s success. We help you understand these decisions by offering tailored Book Publishing Services that fit your goals.  Your vision stays intact while we handle the complexities. No unexpected fees, no restrictive contracts—just a publishing experience designed for your success.",
    InnerServicesItem: [
        {
            title: "How can I publish my book?",
            txt: "The first thing you need to do after making up your mind about publishing a book is to find a publishing house. There are several types of publications including online publication, paperback or hardcopy publishing as well as self Publication. You need to select the kind of publication you want and then work with the publisher company to assist you with the process."
        },
        {
            title: "What’s different about Self Publishing?",
            txt: "By self publishing a book, you get full authority of your work including the management and other processes of publishing like editing, cover design and even marketing strategies. You have to pay a certain amount as fee and you get to call the shots! At Book Writing, different teams designated for different kinds of publications."
        },
        {
            title: "How much does it cost to have a book published?",
            txt: "If you’re worried about the initial investment you have to put in order to get your book published, don’t fret too much! There are various packages available from which you can select the one that works for you. We work with every kind of budget to give your clients the best experience and help them publish their work for the world to read!"
        },
        {
            title: "Can I publish on different publishing platforms?",
            txt: "Yes, you can. The Book Writing team will assist you in choosing the platform i.e., Amazon KDP that you want to publish on. They will also assist you in making sure your manuscript is in the correct format as per the prescribed guidelines of the platform you have chosen for publication and point you in the right direction!"
        }
    ]
}
export const BestSellerData = {
    title: "The Latest Addition to Our Publishing Portfolio",
    txt: "Make Your Next Book Shine with Our Book Publishing Services"
}
//Services
import Image01 from "media/services/book-marketing-services/services/img01.webp"
import Image02 from "media/services/book-marketing-services/services/img02.webp"
import Image03 from "media/services/book-marketing-services/services/img03.webp"
import Image04 from "media/services/book-marketing-services/services/img04.webp"


export const ServicesData = {
    subtitle: "Why Choose",
    title: "Why We’re the Perfect Partner for Your Book Project",
    txt: "",
    ServicesItem: [
        {
            title: "Maximizing Reach & Reader Engagement",
            txt: (<>
                <p>A book’s reach extends far beyond its launch. Proper distribution, marketing, and ongoing support ensure it continues to sell and grow in visibility. Too often, authors publish their books only to see them disappear into digital shelves, unnoticed.</p>
                <p>We do more than publish—we position your book for long-term success. Through global distribution, keyword optimization, and reader-focused strategies, your book reaches the right audience. Whether it’s paperback, hardcover, eBook, or audiobook, we ensure it’s available where readers are looking. Your book isn’t just another listing—it’s a brand. And we help you build it.</p>
            </>),
            img: Image01.src
        },
        {
            title: "Diverse Voices, Boundless Stories: Genres That We Master",
            txt: (<>
                <p>We believe every book has a place in the market. Our Book Publishing Services cater to a wide range of genres and formats, ensuring your work reaches the right audience. Whether you are a fiction writer, a business author, or a poet, we have the expertise to bring your vision to life. We publish various genres, including:</p>
                <ul className="CustomUl">
                    <li><CheckedIcon />Fiction (Mystery, Romance, Thriller, Fantasy, and more)</li>
                    <li><CheckedIcon />Non-fiction (Business, Self-Help, Biographies, and more)</li>
                    <li><CheckedIcon />Academic and Educational Books</li>
                    <li><CheckedIcon />Children's Books and Graphic Novels</li>
                </ul>
                <p>Your book deserves to be seen, and we make sure it reaches the right readers.</p>
            </>),
            img: Image02.src
        },
        {
            title: "Time To Talk About Your Book",
            txt: (<>
                <p>Publishing is a journey, and we want to walk this path with you. What’s your book about? Who do you want to reach? What’s your biggest challenge in getting published?</p>
                <p>We understand the excitement and concerns that come with publishing a book. Whether you're looking for full support or just need help with a specific aspect, our Book Publishing Services are tailored to fit your needs.</p>
                <p>Let’s discuss your book and explore how we can turn your manuscript into a published success. Contact us today to start your publishing journey.</p>

            </>),
            img: Image03.src
        },
        {
            title: "Maximizing Your Book’s Reach with Our Marketing Expertise",
            txt: (<>
                <p>A well-written book deserves a strong marketing strategy.We ensure your book gets noticed through effective promotion across multiple platforms.Our marketing services include Amazon and online store optimization to enhance visibility, social media campaigns for audience engagement, press releases for media outreach, and book launch strategies to maximize sales.We ensure that your book is seen, sold, and read by the right audience.</p>
            </>),
            img: Image04.src
        }
    ]
}

export const OfferData = {
    subtitle: "We Have To Offer",
    title: "End-to-End Book Publishing Services for Your Book",
    desc: "We provide a complete range of Book Publishing Services tailored to meet different publishing needs. Whether you're self-publishing or looking for full-service assistance, we’ve got you covered.Our core publishing services include:",
    ServicesItem: [
        {
            title: "Self Publication",
            txt: "This service gives authors complete creative and financial control over their books while receiving expert guidance from our team. We assist in the entire publishing process, from manuscript formatting and cover design to ISBN registration and metadata optimization. Authors retain full rights and 100% of their royalties, allowing them to decide on pricing, distribution channels, and marketing strategies."
        },
        {
            title: "Paperback Publication",
            txt: "We help authors publish high-quality print books that meet bookstore and online retailer standards. This service includes professional formatting, print-on-demand options, and distribution through platforms like Amazon KDP, IngramSpark, and Barnes & Noble. Whether you need a traditional paperback or a premium edition, we ensure your book is ready for global distribution."
        },
        {
            title: "Online Publication",
            txt: "The eBook market is rapidly growing, and we optimize books for digital platforms such as Amazon Kindle, Apple Books, Google Play Books, and Kobo. Our team ensures flawless formatting, making your book compatible with multiple devices. We also assist in setting up digital rights management (DRM) protection and optimizing keywords for better discoverability."
        },
        {
            title: "Other Self Publishing Services",
            txt: "Beyond publishing, we offer essential services like ISBN assignment, copyright registration, and legal compliance to protect your intellectual property. Additionally, we assist in securing book reviews, setting up author websites, and creating promotional materials to enhance your book’s visibility in the market."
        }
    ]
}

import BookImg from "media/companylogo.webp"
import { CheckedIcon } from "../../app-constants"
export const ProcessData = {
    subtitle: "Our Process",
    title: "What is Our Book Publishing Process?",
    txt: "Our Book Publishing Services follow a structured, efficient, and author-friendly approach, ensuring that your book transitions smoothly from manuscript to a professionally published book. We handle every step carefully, eliminating stress and delays so that your work reaches the right audience without unnecessary roadblocks. Our expert team ensures quality at every phase, so your book stands out in the competitive market.",
    img: BookImg.src,
    ProcessDataItem1: [
        {
            title: "Manuscript Assessment ",
            txt: "Our team thoroughly evaluates your manuscript to ensure it aligns with industry standards. We provide feedback on areas of improvement and help you refine the content before moving to the next stage."
        },
        {
            title: "Editing & Formatting ",
            txt: "We refine your manuscript with professional editing, ensuring clarity, coherence, and grammatical accuracy. Once the editing is complete, our design team works on formatting the book to meet publishing standards for both print and digital versions."
        }
    ],
    ProcessDataItem2: [
        {
            title: "Cover Design & ISBN Registration",
            txt: "A compelling book cover plays a crucial role in attracting readers. Our design experts craft a visually appealing cover that aligns with your book’s theme and target audience. Additionally, we handle ISBN registration, ensuring your book is officially recognized and cataloged in global databases."
        },
        {
            title: "Publishing & Distribution",
            txt: "Your book is prepared for publication in both print and digital formats. We publish it across major platforms, including Amazon KDP, IngramSpark, Apple Books, and Barnes & Noble, making it accessible to readers worldwide."
        }
    ],
    ProcessDataItem3: [
        {
            title: "Marketing & Promotion",
            txt: "A successful book launch requires effective marketing. We create a tailored promotional plan, incorporating social media campaigns, press releases, Amazon optimization, and targeted advertising to maximize visibility and sales potential."
        }
    ]
}

