import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import ServicesProcess from "@/src/app/services/servicesprocess";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  QuoteData,
} from "@/src/app/book-marketing-services/data/data";
import ServicesBox from "@/src/app/services/servicesbox";
import MarketingSlider from "@/src/app/services/marketingslider";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm
        title="Launch Your Book Like a Rocket, Not a Paper Airplane."
        txt="Click if you’re ready to sell more books."
      />
      <MarketingSlider />
      <InnerServices data={InnerServicesData} />
      <ServicesBox data={ServicesData} />
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
                url: "https://www.bookwriting.us/book-marketing-services",
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
                name: "Boost Your Book Sales with Expert Marketing Service",
                image: "https://bookwriting.us/logo.png",
                url: "https://bookwriting.us/book-marketing-services",
                description:
                  "Bring your book from being last to Most Recommended and Best Seller with our book marketing service. We bring your book to the screens of relevant readers.",
                brand: {
                  "@type": "Brand",
                  name: "Book Writing",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  ratingCount: "3165",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
