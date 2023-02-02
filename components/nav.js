import Link from 'next/link'

export default function Nav() {
    return (
      <nav>
        <ul>
        <li>
                <Link href="/">
                 <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                 <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/recruit">
                 <a>Recruit</a>
                </Link>
            </li>
        </ul>
      </nav>
    )
}