import styles from "styles/two-column.module.css";

// アバウトページ、採用情報ページ用のサイドバー
export function TwoColumn({ children }) {
    return (
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}

export function TwoColumnMain({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export function TwoColumnSidebar({ children }) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}