import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import WhyChoose from "@/src/app/home/whychoose";
import { InnerServicesData, ServicesData, BannerData, ProcessData } from "@/src/app/book-marketing-services/data/data";
import ServicesBox from "@/src/app/services/servicesbox";
import MarketingSlider from "@/src/app/services/marketingslider";



export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm title="Discover Your Marketing Options with a Free Quote" />
            <MarketingSlider />
            <InnerServices data={InnerServicesData} />
            <ServicesBox data={ServicesData} />
            <WhyChoose data={ProcessData} spcring={true} />

        </>
    );
}
