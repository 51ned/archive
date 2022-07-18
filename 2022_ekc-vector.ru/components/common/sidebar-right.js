import Arrow from '@/components/common/arrow'
import PageNav from '@/components/page-nav'

import styles from '/components/common/sidebar.module.scss'


export default function RightSidebar(pageNavData) {
  return (
    <div className={styles.sidebar_container}>
      <aside className={styles.sidebar}>
        <div className={styles.right_plug} />
        <PageNav { ...pageNavData } />
        <Arrow />
      </aside>
    </div>
  )
}
