import Headerlp from "@/src/app/landing/components/headerlp"
import Footerlp from "@/src/app/landing/components/footerlp"

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Effortless Book Publishing – Edit, Publish & Promote with Ease",
    description: "Turn your manuscript into a published book with our expert book publishing, editing, and marketing services. Start your journey today with a free consultation.",
    //===== OG Tags =====
    openGraph: {
        title: "Effortless Book Publishing – Edit, Publish & Promote with Ease",
        description: "Turn your manuscript into a published book with our expert book publishing, editing, and marketing services. Start your journey today with a free consultation.",
        url: '/landing/lp1',
        siteName: 'Book Writing',
        locale: 'en_US',
        type: 'website',
        images: "",
    },
    //===== Canonical =====
    alternates: { canonical: '/landing/lp1' },
}


export default function RootLayout({ children }) {

    return (
        <>
            <Headerlp />
            {children}
            <Footerlp />
        </>
    )
}
