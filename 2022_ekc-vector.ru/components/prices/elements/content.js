import ListWithTitle from '@/components/common/list-with-title.js'

import styles from '@/components/prices/elements/content.module.scss'


export default function Content({ id, isActive, labeled, text }) {
  const questions = [text[0], text[1]]
  const materials = [text[2], text[3]]
  const timings = [text[4], text[5]]
  const price = text[6]
  
  return (
    <div
      aria-labelledby={labeled}
      className={ 
        isActive
          ? `${styles.content}`
          : `${styles.visually_hidden}`
      }
      id={id}
      role='region'
      tabIndex={isActive ? '0' : '-1'}
    >
      <ListWithTitle
        title={questions[0]}
        list={questions[1]}
      />
      <ListWithTitle
        title={materials[0]}
        list={materials[1]}
      />
      <ListWithTitle
        title={timings[0]}
        list={timings[1]}
      />
      <p className={styles.price}>
        Цена: {`${price} ₽`}
      </p>
    </div>
  )
}
