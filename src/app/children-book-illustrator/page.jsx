import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ServicesForm from "@/src/app/services/servicesform";
import Team from "@/src/app/services/team";
import { BannerData, ProcessData, BestSellerData } from "@/src/app/children-book-illustrator/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import Reviews from "@/src/app/home/reviews";
import CtaChild from "@/src/app/services/ctachild";
import Gallery from "@/src/app/services/gallery";




export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm />
            <Team />
            <CtaChild />
            <BestSeller innerPage={true} data={BestSellerData} />
            <Gallery />
            <Reviews />
            <ServicesProcess data={ProcessData} />
        </>
    );
}
