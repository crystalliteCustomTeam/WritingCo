import BannerLp2 from "@/src/app/landing/components/bannerlp2";
import ServicesForm from "@/src/app/services/servicesform";
import { ServicesData, BestSellerData, ContentBox1, ContentBox2, ContentBox3, ProcessData, ChooseUsData, JourneyData, JourneyData1 } from "@/src/app/landing/lp2/data/data";
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
            <BannerLp2 lp2={true} />
            <ServicesForm txt="Get a Custom Quote – Contact Us Today" />
            <Services data={ServicesData} />
            <Journey data={JourneyData} data1={JourneyData1} />
            <ContentBox data={ContentBox1} />
            <ContentBox data={ContentBox2} alternet={true} />
            <ContentBox data={ContentBox3} />
            <ServicesProcess data={ProcessData} />
            <ServicesForm bg={true} lp2={true} txt="Hire a Professional Ghostwriter" title="Your Story Deserves to Be ToldLet <span> Our Ghostwriters Craft Your Bestseller!</span>" />
            <WhyChoose data={ChooseUsData} />
            <Reviews lp2={true} />
            <GetQuote />

        </>
    );
}
