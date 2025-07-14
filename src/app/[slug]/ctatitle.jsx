import styles from "@/styles/blog/ctatitle.module.scss"
import Link from "next/link"
import IMG from "media/blogs/ctaBg.webp"

const CtatTitle = ({ tit, subtit, link, btntxt }) => {
    return (
        <section className={styles.ctaBox} style={{ backgroundImage: `url(${IMG.src})` }}>
            <div className={styles.subtitle}>{subtit}</div>
            <div className={styles.titleTxt} dangerouslySetInnerHTML={{ __html: tit }} />
            <Link href={link} className="commonBtn purpleBg">{btntxt}</Link>
        </section>
    )
}

export default CtatTitle