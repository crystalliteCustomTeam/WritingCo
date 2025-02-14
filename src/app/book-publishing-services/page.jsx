import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import ServicesBox from "@/src/app/services/servicesbox";
import { InnerServicesData, ServicesData, BannerData, ProcessData, OfferData, BestSellerData } from "@/src/app/book-publishing-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";

export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm title="Get Your Personalized Publishing Estimate Today" />
            <BestSeller innerPage={true} data={BestSellerData} />
            <InnerServices data={InnerServicesData} />
            <ServicesBox data={ServicesData} />
            <Services data={OfferData} offer={true} />
            <ServicesProcess data={ProcessData} />

        </>
    );
}
