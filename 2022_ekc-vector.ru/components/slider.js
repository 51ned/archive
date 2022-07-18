import React, { useState } from 'react'

import Image from 'next/image'

import styles from '@/components/slider.module.scss'


const customLoader = ({ src, width, quality }) => {
  return `/img/docs/${src}?w=${width}&q=${quality || 75}`
}


export default function Slider(sliderData) {
  const data = Object.values(sliderData)
  
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = data.length - 1
    } else if (newIndex >= data.length) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className={styles.slider}>
      {data.map((img, index) => (
        <div
          className={ 
            (index === activeIndex)
              ? `${styles.slider__item}`
              : `${styles.slider__item} ${styles.totally_hidden}`
          }
          key={index}
        >
          <Image
            alt={img.alt}
            //className={styles.slider__img}
            //height={img.height}
            layout='fill'
            loader={customLoader}
            objectFit='contain'
            src={img.src}
            //width={img.width}
          />
        </div>
      ))}
      <div className={styles.slider__controls}>
        <button onClick={() => updateIndex(activeIndex - 1)}>
          ←
        </button>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          →
        </button>
      </div>
    </div>
  )
}
