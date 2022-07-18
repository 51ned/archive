import { useState } from 'react'

import useWindowSize from 'hooks/use-window-size'

import { getArticleData } from '@/lib/transorm-data'

import Button from '@/components/service/elements/button'
import Content from '@/components/service/elements/content'

import styles from '@/components/service/components/tabs-to-accordion.module.scss'


export default function TabsToAccordion(articleText) {
  const article = getArticleData(articleText)
  
  // get window width (temp solution)
  const { width } = useWindowSize();

  let isDesktop = true

  if (width <= 1280) {
    isDesktop = false
  }
  // window width getted

  // set local states
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeAccIndex, setActiveAccIndex] = useState(null)

  const handleTabClick = (index) => {
    setActiveTabIndex(index)
  }

  const handleAccClick = (index) => {
    index === activeAccIndex
      ? setActiveAccIndex(null)
      : setActiveAccIndex(index)
  }
  // local states setted

  // start generate IDs
  const getID = () => {
    return '_' + Math.random().toString(36).substring(2, 9)
  }
  
  const buttonIDs = new Array(article.length).fill().map(() => getID())
  const contentIDs = new Array(article.length).fill().map(() => getID())
  // IDs generated

  // start
  const tabs = () => {
    return (
      <div className={styles.tabs}>
        <div
          aria-label=''
          className={styles.tabs__list}
          role='tablist'
        >
          {article.map((item, index) => (
            <Button
              controls={contentIDs[index]}
              id={buttonIDs[index]}
              isActive={index === activeTabIndex}
              isTabs={isDesktop === true}
              key={index}
              onClick={() => handleTabClick(index)}
              title={item[0]}
            />
          ))}      
        </div>
        <>
          {article.map((item, index) => (
            <Content
              id={contentIDs[index]}
              isActive={index === activeTabIndex}
              isTabs={isDesktop === true}
              key={index}
              labeled={buttonIDs[index]}
              text={item[1]}
            />
          ))}
        </>
      </div>
    )
  }

  const accordion = () => {
    return (
      <div className={styles.accordion}>
        {article.map((item, index) => (
          <div className={styles.accordion__item} key={index}>
            <Button
              controls={contentIDs[index]}
              id={buttonIDs[index]}
              isActive={index === activeAccIndex}
              isTabs={isDesktop === true}
              onClick={() => handleAccClick(index)}
              title={item[0]}
            />
            <Content
              id={contentIDs[index]}
              isActive={index === activeAccIndex}
              isTabs={isDesktop === true}
              labeled={buttonIDs[index]}
              text={item[1]}
            />
          </div>
        ))}
      </div>
    )
  }
  // end

  return (
    isDesktop ? tabs() : accordion()
  )
}
