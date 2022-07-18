import { useContext } from 'react'

import Link from 'next/link'

import { ModalContext } from '@/components/modal/context'

import styles from '@/components/main-nav.module.scss'


export default function MainNav(props) {
  const links = props.data.list.link.items
  let { closeModal } = useContext(ModalContext)

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {links.map(link => (
          <li className={styles.nav__item} key={link.sys.id}>
            <Link href={link.url}>
              <a
                className={styles.nav__link}
                onClick={() => closeModal()}
                title={link.title}
              >
                {link.text}
              </a>
            </Link>

            <p className={styles.nav__desc}>
              {link.description}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  )
}
