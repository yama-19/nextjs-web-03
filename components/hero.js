import styles from 'styles/hero.module.css'
import Image from 'next/image'
import hero from 'images/hero.jpg'

// ヒーロー部分に画像を設定する。
export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={hero}
            alt=""
            layout="responsive"
            sizes='(min-width: 1152) 576px,(min-width: 768) 50vw, 100vw'
          />
        </figure>
      )}
    </div>
  )
}