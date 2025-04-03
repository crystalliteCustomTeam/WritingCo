import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import CTA from "@/src/app/home/cta";
import {
  ServicesData,
  BannerData,
  ProcessData,
  CtaData,
  BestSellerData,
  QuoteData,
} from "@/src/app/children-book-publication-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm title="Publish a Children's Book" txt="Get a Free Quote" />
      <BestSeller innerPage={true} data={BestSellerData} />
      <CTA data={CtaData} big={true} />
      <Services data={ServicesData} />
      <ServicesProcess data={ProcessData} />
      <GetQuote data={QuoteData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Book Writing",
                alternateName: "BookWriting",
                url: "https://www.bookwriting.us/children-book-publication-services",
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
                "@type": "Product",
                name: "Publish Your Children’s Book in 5 Simple Steps",
                image: "https://www.bookwriting.us/logo.png",
                url: "https://www.bookwriting.us/children-book-publication-services",
                description:
                  "Our children book publication services will create masterpieces that appeal to all the little readers. Start your publishing journey today!",
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
            ],
          }),
        }}
      />
    </>
  );
}
