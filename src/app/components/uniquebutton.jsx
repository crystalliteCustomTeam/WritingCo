
"use client";
import styles from "@/styles/components/uniquebutton.module.scss"
import PopUp from "@/src/app/components/popup";
import { useState } from "react";

const UniqueButton = ({ center, BgBlack, txt, SimpleBtn, OneBtn, whiteBtn }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };


    // Chat Code
    const openChat = () => {
        if (window.LC_API) {
            window.LC_API.open_chat_window();
        } else {
            console.error("LiveChat API is not loaded");
        }
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
                        <div className={styles.chatStyle} onClick={openChat}>Chat Now</div>
                        : ''
                    }
                </div>
            }
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default UniqueButton