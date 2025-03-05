import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import { InnerServicesData, ServicesData, BannerData, ProcessData, BestSellerData, QuoteData } from "@/src/app/author-website-design-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";


export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm title="Social media isn’t enough,</br> Your author website is your home base." tx="Get a Free Quote"/>
            <BestSeller innerPage={true} data={BestSellerData} />
            <InnerServices data={InnerServicesData} />
            <Services data={ServicesData} />
            <ServicesProcess data={ProcessData} />
            <GetQuote data={QuoteData} />
        </>
    );
}
