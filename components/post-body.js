import styles from 'styles/post-body.css'

// アバウトページ、採用情報ページのテキストボディ
export default function PostBody({ children }) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}