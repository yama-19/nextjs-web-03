import Link from 'next/link'
import styles from 'styles/information.module.css'

// 資料請求のボタンをクリックで呼び出され、新規タブでフォームが起動される。
export default function information() {
    return (
        <div className={styles.stack}>
            <button className={styles.buttonlink}>
                <Link href="/form">
                    <a target="_blank">資料のご請求はこちら</a>
                </Link>
            </button>
        </div>
    )
}