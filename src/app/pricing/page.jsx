import Banenr from "@/src/app/pricing/banner";
import ContentBox from "@/src/app/pricing/contentbox";
import { ContentData, SelfPricingData } from "@/src/app/pricing/data/data";
import SelfPricing from "@/src/app/pricing/selfpricing";



export default function Page() {
    return (
        <>
            <Banenr />
            <ContentBox data={ContentData} />
            <SelfPricing data={SelfPricingData} />
        </>
    );
}
