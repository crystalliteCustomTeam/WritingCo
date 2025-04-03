import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import ContentBox from "@/src/app/services/contentbox";
import ContentBoxes from "@/src/app/services/contentboxes";
import ServicesBox from "@/src/app/services/servicesbox";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  ContentBoxData,
  ContentBoxesData,
  TableContetData,
  BestSellerData,
  QuoteData,
} from "@/src/app/book-editing-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import TableContent from "@/src/app/services/tablecontent";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm
        title="Bad writing happens, publishing it shouldn’t."
        paratxt="Get a free quote for expert editing."
        txt="Connect With a Book Consultant"
      />
      <BestSeller innerPage={true} data={BestSellerData} />
      <InnerServices data={InnerServicesData} />
      <ServicesBox data={ServicesData} />
      <ContentBox data={ContentBoxData} />
      <ContentBoxes data={ContentBoxesData} />
      <ServicesProcess data={ProcessData} />
      {/* <TableContent data={TableContetData} /> */}
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
                url: "https://www.bookwriting.us/book-editing-services",
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
                name: "Professional Book Editing Services",
                image: "https://www.bookwriting.us/logo.png",
                url: "https://www.bookwriting.us/book-editing-services",
                description:
                  "Book Editing Service that transforms your book from Fine to Great. Your book’s got potential, and we make sure it reaches it with our book editing services.",
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
