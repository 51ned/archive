import { useState } from 'react'

import useWindowSize from '@/hooks/use-window-size'

import { getPricesData } from '@/lib/transorm-data'

import Button from '@/components/prices/elements/button'
import Content from '@/components/prices/elements/content'

import styles from '@/components/prices/index.module.scss'


export default function PricesAccordion(pricesData) {
  const res = getPricesData(pricesData)

  const prices = res.prices
  const accordionServiceTitle = res.accordionServiceTitle
  const accordionPriceTitle = res.accordionPriceTitle

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
  
  const buttonIDs = new Array(prices.length).fill().map(() => getID())
  const contentIDs = new Array(prices.length).fill().map(() => getID())
  // IDs generated

  const pricesOnDesktop = () => {
    return (
      <div className={styles.accordion_wrapper}>
        {isDesktop && <div className={styles.head}>
          <div className={styles.head__service_title}>{accordionServiceTitle}</div>
          <div className={styles.head__price_title}>{accordionPriceTitle}</div>
        </div>}
        {prices.map((item, index) => (
          <div
            className={styles.accordion}
            key={index}
            role='tablist'
          >
            <div className={styles.accordion__button_container}>
              <Button
                controls={contentIDs[index]}
                id={buttonIDs[index]}
                isActive={index === activeIndex}
                onClick={() => handleClick(index)}
                text={item[2]}
                //name={item[0]} // потом переделать в span aria-disabled
              />
            </div>

            <div className={styles.accordion__content_container}>
              <Content
                id={contentIDs[index]}
                isActive={index === activeIndex}
                labeled={buttonIDs[index]}
                text={[item[5], item[6], item[7], item[8], item[9], item[10], item[11]]}
              />
            </div>
            
            <div className={styles.accordion__price_container}>
              {item[11]}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const pricesOnMobile = () => {
    return (
      <div className={styles.accordion_wrapper}>
        {isDesktop && <div className={styles.head}>
          <div className={styles.head__service_title}>{accordionServiceTitle}</div>
          <div className={styles.head__price_title}>{accordionPriceTitle}</div>
        </div>}
        {prices.map((item, index) => (
          <div className={styles.accordion} key={index}>
            <div className={styles.accordion__button_container}>
              <Button
                controls={contentIDs[index]}
                id={buttonIDs[index]}
                isActive={index === activeIndex}
                onClick={() => handleClick(index)}
                text={item[2]}
                //name={item[0]}
              />
            </div>
            <div className={styles.accordion__content_container}>
              <Content
                id={contentIDs[index]}
                isActive={index === activeIndex}
                labeled={buttonIDs[index]}
                text={[item[5], item[6], item[7], item[8], item[9], item[10], item[11]]}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    isDesktop ? pricesOnDesktop() : pricesOnMobile()
  )
}
