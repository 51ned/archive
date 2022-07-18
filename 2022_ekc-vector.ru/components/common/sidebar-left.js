import Burger from '@/components/burger'
import Breadcrumbs from '@/components/breadcrumbs'

import styles from '@/components/common/sidebar.module.scss'


export default function LeftSidebar(breadcrumbsData) {
  return (
    <div className={styles.sidebar_container}>
      <aside className={styles.sidebar}>
        <Burger />
        <Breadcrumbs { ...breadcrumbsData } />
        <div className={styles.left_plug} />
      </aside>
    </div>
  )
}
