import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          {/* ロゴとナビゲーションメニューを設定 */}
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}