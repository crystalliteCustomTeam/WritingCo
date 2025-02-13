import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import { InnerServicesData, ServicesData, BannerData, ProcessData, ContentBoxData, ContentBoxesData, BestSellerData } from "@/src/app/book-writing-services/data/data";
import ContentBox from "@/src/app/services/contentbox";
import ContentBoxes from "@/src/app/services/contentboxes";
import ServicesProcess from "@/src/app/services/servicesprocess";



export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm />
            <BestSeller innerPage={true} data={BestSellerData} />
            <InnerServices data={InnerServicesData} />
            <Services data={ServicesData} />
            <ContentBox data={ContentBoxData} />
            <ContentBoxes data={ContentBoxesData} />
            <ServicesProcess data={ProcessData} />
        </>
    );
}
