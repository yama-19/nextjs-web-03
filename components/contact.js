import Social from 'components/social'
import styles from 'styles/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.stack}>

            {/* Contactにメールアドレスを設定。クリックするとメーラを起動する */}
            <h3 className={styles.heading}>Contact</h3>
            <p><a className={styles.email} href="mailto:in_fo&#64;ex_ample.c0m">in_fo&#64;ex_ample.c0m</a></p>

            {/* ソーシャルアイコンを設定 */}
            <Social iconSize="30px" />
            <br />
        </div>
    )
}