import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Social from 'components/social'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <hr />
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          {/* フッターにソーシャルアイコンを設定する */}
          <Social />
          {/* コピーライトを記載 */}
          <small className={styles.footerCopy}> Copyright ©2023ex_ample Inc.</small>
        </div>
      </Container>
    </footer>
  )
}