import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import CTA from "@/src/app/home/cta";
import { ServicesData, BannerData, ProcessData, CtaData, BestSellerData, QuoteData } from "@/src/app/children-book-publication-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";


export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm title="Discover Your Book Potential with a Free Quote" />
            <BestSeller innerPage={true} data={BestSellerData} />
            <CTA data={CtaData} big={true} />
            <Services data={ServicesData} />
            <ServicesProcess data={ProcessData} />
            <GetQuote data={QuoteData} />
        </>
    );
}
