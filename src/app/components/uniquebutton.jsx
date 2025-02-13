
import styles from "@/styles/components/uniquebutton.module.scss"

const UniqueButton = ({ center, BgBlack, txt, SimpleBtn, OneBtn }) => {
    return (
        <>
            {SimpleBtn ?
                <div className={`${SimpleBtn ? styles.SimpleBtn : ""}`}>
                    <div className={styles.btnStyle}>{txt}</div>
                </div>
                :
                <div className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""}`}>
                    <div className={styles.btnStyle}>{txt}</div>
                    {!OneBtn ?
                        <div className={styles.chatStyle}>Chat Now</div>
                        : ''
                    }
                </div>
            }
        </>
    )
}

export default UniqueButton