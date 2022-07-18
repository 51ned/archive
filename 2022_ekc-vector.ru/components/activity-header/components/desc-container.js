import Desc from '@/components/activity-header/elements/desc'
import Copyright from '@/components/activity-header/elements/copyright'

import styles from '@/components/activity-header/components/desc-container.module.scss'


export default function DescContainer(descData) {
  return(
    <div className={styles.desc_container}>
      <div className={styles.plug} />

      <section className={styles.desc}>
        <Desc { ...descData } />
      </section>

      <div className={styles.copyright_container}>
        <Copyright />
      </div>
    </div>
  )
}