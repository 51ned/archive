import Link from 'next/link'

import styles from '@/components/breadcrumbs.module.scss'


export default function Breadcrumbs(props) {
  const breadcrumbs = props?.linksCollection?.items
  let i = 1
  
  return (
    <ul 
      className={styles.menu}
      itemScope
      itemType='http://schema.org/BreadcrumbList'
    >
      {breadcrumbs.map((link, index) => (
        <li
          className={styles.menu__item}
          itemProp='itemListElement'
          itemScope
          itemType='https://schema.org/ListItem'
          key={index}
        >
          <Link href={link.url}>
            <a
              className={styles.menu__link}
              itemProp='item'
              title={link.title}
            >
              <span itemProp='name'>{link.text}</span>
              <meta itemProp='position' content={i++} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
