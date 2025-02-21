import Banner from '@/src/app/blogs/banner'
import { BannerData, BlgosData, QuoteData } from '@/src/app/blogs/data/data'
import Blogs from "@/src/app/blogs/blogs";
import GetQuote from "@/src/app/home/getquote";
const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <Blogs data={BlgosData} blogPage={true} />
            <GetQuote data={QuoteData} />

        </>
    )
}

export default Page