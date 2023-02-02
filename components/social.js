// import Link from 'next/link'
import styles from 'styles/social.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index"
import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({iconSize = 'initial'}) {
    return (
        <ul className={styles.list} style={{'--icon-size': iconSize }}>
            <li>
            <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
                <span className="sr-only">Twitter</span>
            </a>
            </li>
            <li>
            <a href="https://www.facebook.com/">
                 <FontAwesomeIcon icon={faFacebookF} />
                 <span className="sr-only">Facebook</span>
            </a>
            </li>
            <li>
            <a href="https://instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="sr-only">Instagram</span>
            </a>
            </li>
            <li>
            <a href="https://github.com/">
                <FontAwesomeIcon icon={faGithub} />
                <span className="sr-only">github</span>
            </a>
            </li>
        </ul>
    )
} 