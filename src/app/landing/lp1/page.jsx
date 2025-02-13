import Banner from "@/src/app/landing/components/banner";
import ServicesForm from "@/src/app/services/servicesform";
import BestSeller from "@/src/app/home/bestseller";
import { ServicesData, BestSellerData, ContentBox1, ContentBox2, ContentBox3, ProcessData, ChooseUsData } from "@/src/app/landing/lp1/data/data";
import Services from "@/src/app/home/services";
import Journey from "@/src/app/landing/components/journey";
import ContentBox from "@/src/app/landing/components/content";
import ServicesProcess from "@/src/app/services/servicesprocess";
import WhyChoose from "@/src/app/landing/components/whychoose";
import Reviews from "@/src/app/home/reviews";
import GetQuote from "@/src/app/home/getquote";


export default function Page() {
    return (
        <>
            <Banner />
            <ServicesForm txt="Let’s Publish Your Book- Fill the Form Today!" />
            <BestSeller data={BestSellerData} landing={true} />
            <Services data={ServicesData} landing={true} />
            <Journey />
            <ContentBox data={ContentBox1} />
            <ContentBox data={ContentBox2} alternet={true} />
            <ContentBox data={ContentBox3} />
            <ServicesProcess data={ProcessData} />
            <ServicesForm bg={true} txt="Get Your Free Publishing Roadmap!" title="Your Story Deserves To Be Read Let’s <span>Publish Your Best Seller!</span>" />
            <WhyChoose data={ChooseUsData} />
            <Reviews />
            <GetQuote />

        </>
    );
}
