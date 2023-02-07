import Layout from 'components/layout'
import 'styles/sanitize.css'
import 'styles/globals.css'

// fontawesomeの設定
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}