import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import ServicesBox from "@/src/app/services/servicesbox";
import GetQuote from "@/src/app/home/getquote";
import ServicesProcess from "@/src/app/services/servicesprocess";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  OfferData,
  BestSellerData,
  QuoteData,
} from "@/src/app/book-publishing-services/data/data";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm title="Wrote a book? Great. Now finish the job! Get it published." />
      <BestSeller innerPage={true} data={BestSellerData} />
      <InnerServices data={InnerServicesData} />
      <ServicesBox data={ServicesData} />
      <Services data={OfferData} offer={true} />
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
                url: "https://www.bookwriting.us/book-publishing-services",
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
                name: "Publish Your Book With Amazon KDP Publishing Service",
                image: "https://bookwriting.us/logo.png",
                url: "https://bookwriting.us/book-publishing-services",
                description:
                  "If your dream is to be published, Our Book Publishing Service is your best shot at success & earning royalties. Hire us today!",
                brand: {
                  "@type": "Brand",
                  name: "Book Writing",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  ratingCount: "3772",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
