import Image from 'next/image'

import Arrow from '@/components/common//arrow'

import styles from '@/components/activity-header/components/person-container.module.scss'


const customLoader = ({ src, width, quality }) => {
  return `/img/persons/${src}?w=${width}&q=${quality || 75}`
}


export default function PersonContainer(imgData) {
  return (
    <div className={styles.person_container}>
      <div className={styles.arrow_container}>
        <Arrow />
      </div>

      <div className={styles.img_container}>
        <div className={styles.img_container__inner}>
          <Image
            alt={imgData.imgAlt}
            layout='fill'
            loader={customLoader}
            objectFit='contain'
            objectPosition='right bottom'
            //priority
            src={imgData.imgSrc}
          />
        </div>
      </div>
    </div>
  )
}
