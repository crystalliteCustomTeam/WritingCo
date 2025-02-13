import Banenr from "@/src/app/services/banner";
import { BannerData } from "@/src/app/portfolio/data/data";
import BookTabs from "@/src/app/portfolio/booktabs";




export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <BookTabs />
        </>
    );
}
