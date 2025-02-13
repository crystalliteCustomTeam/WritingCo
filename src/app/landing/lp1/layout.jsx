import Headerlp from "@/src/app/landing/components/headerlp"
import Footerlp from "@/src/app/landing/components/footerlp"

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "",
        description: "",
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
