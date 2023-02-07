// import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'
import Image from 'next/image'
import eyecatch from 'images/tokyobright.jpg'

export default function Home() {
  return (
    <>
      <Meta />
      <Hero
        title="LOGO"
        subtitle="Development and Manufacturing" />
      <figure className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image
          src={eyecatch}
          alt="画像"
          layout="responsive"
          objectFit="cover"
          placeholder='blur'
        />
      </figure>
    </>
  )
}