import dynamic from 'next/dynamic'

import useInView from 'react-cool-inview'

import styles from '@/components/contacts.module.scss'


const OurMap = dynamic(() => import('@/components/map'))


export default function Contacts(props) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve()
  })

  return (
    <div className={styles.contacts}>
      <h4 className={styles.contacts__title}>Контакты</h4>
      
      <p className={styles.contacts__description}>
        Наш офис находится в шаговой доступности от станций метро «Китай-город» и «Чистые пруды». 1.5 км от Садового кольца, стихийная парковка, всегда есть свободные места. Подробнее:
      </p>

      <div className={styles.contacts__wrapper}>
        <div className={`${styles.contacts__address_container} ${styles.width_1_2}`}>
          <div className={styles.contacts__address_item}>
            <div>
              <p>
                {props.adressTitle} <br />
                {props.adressValue}
              </p>
            </div>
          </div>

          <div className={styles.contacts__address_item}>          
            <div>
              <p>
                {props.phoneTitle} <br />
                {props.expertPhoneNumber} <br />
                {props.commonPhoneNumber}
              </p>
            </div>
          </div>

          <div className={styles.contacts__address_item}>
            <div>
              <p>
                {props.emailTitle} <br />
                {props.emailValue} 
              </p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.contacts__map_container} ${styles.width_1_2}`} ref={observe}>
          {inView && <OurMap />}
        </div>
      </div>
    </div>
  )
}
