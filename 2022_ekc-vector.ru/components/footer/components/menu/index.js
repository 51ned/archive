import { useState } from 'react'

import Button from '@/components/footer/components/menu/elements/button'
import Content from '@/components/footer/components/menu/elements/content'

import useWindowSize from 'hooks/use-window-size'

import styles from './index.module.scss'


export default function FooterMenu(props) {
  const menu = props?.data
  const lists = menu?.list?.items

  // get window width (temp solution)
  const { width } = useWindowSize();

  let isDesktop = true

  if (width <= 1280) {
    isDesktop = false
  }
  // window width getted

  // set local state
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    index === activeIndex
      ? setActiveIndex(null)
      : setActiveIndex(index)
  }
  // local state setted

  // start generate IDs
  const getID = () => {
    return '_' + Math.random().toString(36).substring(2, 9)
  }
  
  const buttonIDs = new Array(menu.length).fill().map(() => getID())
  const contentIDs = new Array(menu.length).fill().map(() => getID())
  // IDs generated
  

  return (
    <div className={styles.menu}>
      <div className={styles.menu__wrapper}>
        <p className={styles.menu__title}>
          {menu.title.text}
        </p>

        <p className={styles.menu__description}>
          {menu.description.text}
        </p>
      </div>

      <div className={styles.lists}>
        {lists.map((list, index) => (
          <div key={index} className={styles.list}>
            <Button
              controls={contentIDs[index]}
              id={buttonIDs[index]}
              isActive={
                isDesktop
                ? index === index
                : index === activeIndex
              }
              onClick={() => handleClick(index)}
              title={list.title}
            />
            
            <Content
              id={contentIDs[index]}
              isActive={
                isDesktop
                ? index === index
                : index === activeIndex
              }
              labeled={buttonIDs[index]}
              list={list.link.items}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
