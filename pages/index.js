import Container from 'components/container'
import Meta from 'components/meta'
import Header from 'components/header'
import Footer from 'components/footer'
import Hero from 'components/hero'

export default function Home() {
  return (
    <Container>
      <Meta />
       <Hero 
       title = "Blue"
       subtitle = "Development and Manufacturing"
       imageOn/>
    </Container>

  )
}