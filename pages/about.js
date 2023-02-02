import Contact from 'components/contact'
import Container from 'components/container'
// import Social from 'components/social'
import Hero from 'components/hero'
import Image from 'next/image'
import eyecatch from 'images/about3.jpg'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

export default function About() {
    return (
     <Container>
         <Hero 
         title = "About Us"
         subtitle = "Future and Imagination"/>
         <figure>
          <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          placeholder='blur'
          />
         </figure>
         <TwoColumn>
         <TwoColumnMain>
         <post-body>
         <h2>私たちが目指すもの</h2><br/>
           <p>　私たちは、最先端の製品を通じて消費者に喜びを提供することに専念しています。
            私たちは、テクノロジーは誰にとっても身近で楽しいものであるべきだと考え、
            革新的であるだけでなく、使い勝手の良い製品を生み出すためにたゆまぬ努力を続けています。
            私たちのは、進化するお客様のニーズに応えるため、常に新しいソリューションを研究・開発しています。
            技術愛好家の方にも、楽で楽しい体験をお求めの方にも、私たちはあなたのニーズに合った製品をご用意しています。</p>
           <br/><h2>社会とともに未来へ</h2><br/>
           <p>　私たちは、これからのIoT、情報技術、持続可能な開発目標（SDGs）が交差する社会の最前線に立っています。
            私たちは、テクノロジーの力を活用することで、すべての人にとってより良い未来を形作ることができると信じています。
            私たちの専門家チームは、IoTとITの知識を駆使して、SDGsに向けた進展を促進するだけでなく、
            より持続可能な世界のための基礎を築く革新的なソリューションを生み出しています。
            私たちは、テクノロジーを使って生活を向上させることに情熱を注いでおり、
            ポジティブな変化をもたらすためにIoTとITの可能性を最大限に追求することを約束します。
            テクノロジーをあなたのために役立てるという私たちのミッションに参加し、
            私たちの製品の楽しさをご自身で体験してください。</p>
        </post-body>
        </TwoColumnMain>
        <TwoColumnSidebar>
        <Contact />
        </TwoColumnSidebar>
        </TwoColumn>
     </Container>
   )
}