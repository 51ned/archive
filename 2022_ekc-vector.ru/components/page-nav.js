import { useEffect, useRef, useState } from 'react'

import styles from '@/components/page-nav.module.scss'


export default function PageNav(props) {
  const pageNav = props?.data?.pageNav?.linksCollection?.items

  const [activeIndex, setActiveIndex] = useState(0)
  const linkRefsArr = useRef([])

  useEffect(() => {
    linkRefsArr.current = linkRefsArr.current.slice(0, pageNav.length)

    const options = {
      threshold: .75
    }
    
    const handler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')

          for (let i = 0; i < pageNav.length; i++) {
            if (linkRefsArr.current[i].getAttribute('href') === `#${id}`) {
              setActiveIndex(i)
            }
          }
        }
      })
    }
    
    const spy = new IntersectionObserver(handler, options)
    const targets = document.querySelectorAll('[data-spy-target]')
    
    targets.forEach(target => {
      spy.observe(target)
    })
  }, [])

  const clickHandler = () => {
    
  }

  return (
    <ul className={styles.menu}>
      {pageNav.map((link, index) => (
        <li className={styles.menu__item} key={index}>
          <a
            className={
              (index === activeIndex)
                ? `${styles.menu__link} ${styles.active}`
                : `${styles.menu__link}`
            }
            href={`#${link.hash}`}
            ref={el => linkRefsArr.current[index] = el}
            title={link.title}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  )
}
