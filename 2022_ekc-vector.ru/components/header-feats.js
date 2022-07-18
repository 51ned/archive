import { useContext } from 'react'

import { ModalContext } from '@/components/modal/context'

import styles from '@/components/header-feats.module.scss'


export default function HeaderFeats(props) {
  let { openModal } = useContext(ModalContext)
  
  const cardsData = props.items
  
  return (
    <div className={styles.header_feats_container}>
      {cardsData.map((card, index) => (
        <div
          className={`${styles.card} ${styles.width_1_2}`}
          key={index}
          role='note'
        >
          <p className={styles.card__title}>{card.title}</p>
          <p className={styles.card__paragraph}>{card.text}</p>
          
          <button
            className={styles.card__button}
            onClick={() => openModal(`${card.contextValue}`)}
          >
            {card.buttonTitle}
            <span aria-hidden className={styles.card__button_icon} />
          </button>
        </div>
      ))}
    </div>
  )
}