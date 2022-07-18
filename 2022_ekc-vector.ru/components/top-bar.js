import useWindowSize from 'hooks/use-window-size.js'

import Burger from '@/components/burger'
import Phone from '@/components/phone'

import styles from '@/components/top-bar.module.scss'


export default function Topbar(phoneData) {
  const { width } = useWindowSize();

  let isDesktop = true

  if (width <= 1280) {
    isDesktop = false
  }

  return (
    <div className={styles.topbar}>
      <div>
        <div className={
          isDesktop
            ? `${styles.visually_hidden}`
            : `${styles.topbar__burger_container}`
        }>
          <Burger />
        </div>
      </div>

      <div className={styles.topbar__phone_container}>
        <Phone { ...phoneData } />
      </div>
    </div>
  )
}
