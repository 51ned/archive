import Link from 'next/link'

import styles from '@/components/footer/components/menu/elements/content.module.scss'


export default function Content({ list, id, isActive, labeled }) {
  return (
    <ul
      aria-labelledby={labeled}
      className={ 
        isActive
          ? `${styles.list}`
          : `${styles.list} ${styles.visually_hidden}`
      }
      id={id}
      tabIndex={isActive ? '0' : '-1'}
    >
      {list.map(item => (
        <li key={item.sys.id} className={styles.list__item}>
          <Link href={item.url}>
            <a className={styles.list__item} title={item.title}>
              {item.text}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
