import { getPricesFeatsData } from '@/lib/transorm-data'

import styles from '@/components/prices-feauters.module.scss'


export default function PricesFeauters(props) {
  const data = getPricesFeatsData(props)

  const numOfCards = data.numOfCards
  const cards = data.cards
  
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <div
          className={
            numOfCards === 2 && `${styles.card} ${styles.width_1_2}` ||
            numOfCards === 3 && `${styles.card} ${styles.width_1_3}` ||
            numOfCards === 4 && `${styles.card} ${styles.width_1_4}`
          }
          key={index}
          role='note'
        >
          {card.length > 1 && 
            <p className={styles.card__title}>
              {card[0]}
            </p>
          }
          {card[1].map((text, index) => (
            <p className={styles.card__paragraph} key={index}>
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}
