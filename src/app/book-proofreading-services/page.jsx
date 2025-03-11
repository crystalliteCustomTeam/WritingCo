import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  BestSellerData,
  QuoteData,
} from "@/src/app/book-proofreading-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm title="Get a Free Proofreading Assessment Today" />
      <BestSeller innerPage={true} data={BestSellerData} />
      <InnerServices data={InnerServicesData} />
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
                url: "https://www.bookwriting.us/book-proofreading-services",
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
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "39.78373",
                  longitude: "-100.445882",
                },
              },
              {
                "@type": "Product",
                name: "Fix Your Typos with Our Book Proofreading Service",
                image: "https://bookwriting.us/logo.png",
                url: "https://bookwriting.us/book-proofreading-services",
                description:
                  "Our Professional Proofreading Services make sure your manuscript is polished, free of errors, and ready for publication. Let us take your writing to the next level.",
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
