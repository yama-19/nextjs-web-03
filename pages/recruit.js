import Meta from 'components/meta'
import Container from 'components/container'
import Contact from 'components/contact'
import Hero from 'components/hero'
import Image from 'next/image'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import eyecatch from 'images/coffee.jpg'
import Information from 'components/information'

export default function Recruit() {
  return (
    <Container>
      <Meta pageTitle="採用情報" />
      <Hero
        title="Recruit"
        subtitle="Let's create together!" />
      <TwoColumn>
        <TwoColumnMain>
          <post-body>
            <h2>一緒にチャレンジしませんか</h2><br />
            <p>　弊社は、より良い未来を創造するためのイノベーションに取り組んでいます。
              そのためには、多様なバックグラウンドを持つトップタレントの方々が集まり、一緒に働くことが大切です。
              私たちは、エネルギッシュでマインドフルな方を募集しています。常に新しいことに挑戦し、高い目標を持って働く方、
              チームで働くことが好きな方、顧客に対して真摯かつ誠実に接することができる方を歓迎します。
              もし、あなたがこれらのキャリアアピールに賛同できる方であり、我々と一緒に成長したいと思う方であれば、ぜひ応募ください。</p>
            <br />
          </post-body>
          <figure>
            <Image
              src={eyecatch}
              alt="画像"
              layout="responsive"
              sizes="(min-width: 1152px) 1152px, 100vw"
              placeholder='blur'
            />
          </figure>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
          <Information />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}