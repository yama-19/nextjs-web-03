import Layout from 'components/layout' 
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'styles/sanitize.css'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
   return (   
   <Layout>
     <Component {...pageProps} />
   </Layout>
   )
}