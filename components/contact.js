import Social from 'components/social'
import styles from 'styles/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.stack}>

            {/* Contactにメールアドレスを設定。クリックするとメーラを起動する */}
            <h3 className={styles.heading}>Contact</h3>
            <p><a className={styles.email} href="mailto:in-fo&#64;ex-ample.c0m">in-fo&#64;ex-ample.c0m</a></p>

            {/* ソーシャルアイコンを設定 */}
            <div className={styles.contactSocial}>
            <Social iconSize="30px" />
            </div>
            <br />
        </div>
    )
}