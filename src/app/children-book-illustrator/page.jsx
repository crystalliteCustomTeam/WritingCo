import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ServicesForm from "@/src/app/services/servicesform";
import Team from "@/src/app/services/team";
import {
  BannerData,
  ProcessData,
  BestSellerData,
  QuoteData,
} from "@/src/app/children-book-illustrator/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import Reviews from "@/src/app/home/reviews";
import CtaChild from "@/src/app/services/ctachild";
import Gallery from "@/src/app/services/gallery";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm
        title="Big or small, we draw it all, <br/>Let's make magic, give us a call!"
        txt="Get a Free Quote"
      />
      <Team />
      <CtaChild />
      <BestSeller innerPage={true} data={BestSellerData} />
      <Gallery />
      <Reviews />
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
                url: "https://www.bookwriting.us/children-book-illustrator",
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
                name: "Top Illustrators for Your Children’s Book",
                image: "https://www.bookwriting.us/logo.png",
                url: "https://www.bookwriting.us/children-book-illustrator",
                description:
                  "If you want your book to be in the imagination of young readers, then we are the ones who will make it. Get your book illustrated with children book illustration!",
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
