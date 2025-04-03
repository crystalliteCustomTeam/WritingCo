import Banner from "@/src/app/home/banner";
import Clients from "@/src/app/home/clients";
import Story from "@/src/app/home/story";
import Services from "@/src/app/home/services";
import WhyChoose from "@/src/app/home/whychoose";
import BestSeller from "@/src/app/home/bestseller";
import CTA from "@/src/app/home/cta";
import Reviews from "@/src/app/home/reviews";
import GetQuote from "@/src/app/home/getquote";
import {
  ServicesData,
  ProcessData,
  CtaData,
  BestSellerData,
  QuoteData,
} from "@/src/app/home/data/data";

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <Story />
      <Services data={ServicesData} />
      <WhyChoose data={ProcessData} />
      <BestSeller data={BestSellerData} />
      <CTA data={CtaData} />
      <Reviews />
      <GetQuote data={QuoteData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Book Writing",
              alternateName: "BookWriting",
              url: "https://www.bookwriting.us/",
              logo: "https://www.bookwriting.us/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "(302) 459-5127",
                contactType: "sales",
                contactOption: "TollFree",
                areaServed: "US",
                availableLanguage: "en",
              },
              sameAs: [],
            },
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Book Writing Company: Start Your Bestseller in 3 Easy Steps!",
              image: "https://www.bookwriting.us/logo.png",
              url: "https://www.bookwriting.us/",
              description:
                "Making books from concept to bestseller, we offer best book writing, editing, publishing, and marketing services in US. Expert book services at affordable prices.",
              brand: {
                "@type": "Brand",
                name: "Book Writing",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1624",
              },
            },
          ]),
        }}
      />
    </>
  );
}
