import styles from "styles/accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

// アバウトページのFAQ(アコーディオンメニュー)を設定する。
export default function Accordion({ heading, children }) {
    const [textIsOpen, setTextIsOpen] = useState(false)
    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }
    const refText = useRef(null)

    return (
        <div className={textIsOpen ? styles.open : styles.close}>
            <h3 className={styles.heading}>
                <button onClick={toggleText}>
                    {heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
                </button>
            </h3>
            {/* 画面に表示されていない部分も含め、要素の高さを取得する。 */}
            <div className={styles.text}
                ref={refText}
                //  css変数に設定する。
                style={{
                    '--text-height': refText.current
                        ? `${refText.current.scrollHeight}px`
                        : `0px`,
                }}
            >
                <div className={styles.textInner}>{children}</div>
            </div>
        </div>
    )
}