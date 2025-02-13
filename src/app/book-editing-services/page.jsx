import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import ContentBox from "@/src/app/services/contentbox";
import ContentBoxes from "@/src/app/services/contentboxes";
import ServicesBox from "@/src/app/services/servicesbox";
import { InnerServicesData, ServicesData, BannerData, ProcessData, ContentBoxData, ContentBoxesData, TableContetData, BestSellerData } from "@/src/app/book-editing-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import TableContent from "@/src/app/services/tablecontent";

export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm />
            <BestSeller innerPage={true} data={BestSellerData} />
            <InnerServices data={InnerServicesData} />
            <ServicesBox data={ServicesData} />
            <ContentBox data={ContentBoxData} />
            <ContentBoxes data={ContentBoxesData} />
            <ServicesProcess data={ProcessData} />
            <TableContent data={TableContetData} />

        </>
    );
}
