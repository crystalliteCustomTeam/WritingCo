import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ServicesForm from "@/src/app/services/servicesform";
import Team from "@/src/app/services/team";
import { BannerData, ProcessData, BestSellerData, QuoteData } from "@/src/app/children-book-illustrator/data/data";
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
            <ServicesForm title="Big or small, we draw it all, <br/>Let's make magic, give us a call!" txt="Get a Free Quote" />
            <Team />
            <CtaChild />
            <BestSeller innerPage={true} data={BestSellerData} />
            <Gallery />
            <Reviews />
            <ServicesProcess data={ProcessData} />
            <GetQuote data={QuoteData} />
        </>
    );
}
