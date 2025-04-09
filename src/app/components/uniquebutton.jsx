
"use client";
import styles from "@/styles/components/uniquebutton.module.scss"
import PopUp from "@/src/app/components/popup";
import { useState } from "react";

const UniqueButton = ({ center, BgBlack, txt, SimpleBtn, OneBtn, whiteBtn }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <>
            {SimpleBtn ?
                <div className={`${SimpleBtn ? styles.SimpleBtn : ""}`} onClick={() => handleClick()}>
                    <div className={styles.btnStyle}>{txt}</div>
                </div>
                
                :
                <div className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""} ${whiteBtn ? styles.whiteBtn : ""}`} >
                    <div className={styles.btnStyle} onClick={() => handleClick()}>{txt}</div>
                    {!OneBtn ?
                        <div className={styles.chatStyle}>Chat Now</div>
                        : ''
                    }
                </div>
            }
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default UniqueButton