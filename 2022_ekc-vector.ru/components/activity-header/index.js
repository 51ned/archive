import Logo from '@/components/activity-header/elements/logo'
import DescContainer from '@/components/activity-header/components/desc-container'
import PersonContainer from '@/components/activity-header/components/person-container'

import styles from '@/components/activity-header/index.module.scss'


export default function ActivityHeader(headerData) {
  const preTitle1stLine = headerData.preTitle1stLine
  const preTitle2ndLine = headerData.preTitle2ndLine
  const preTitle3rdLine = headerData.preTitle3rdLine
  const title = headerData.title
  const desc = headerData.desc.items
  const descData = {preTitle1stLine, preTitle2ndLine, preTitle3rdLine, title, desc}

  const imgAlt = headerData.personAlt
  const imgSrc = headerData.personImg
  const imgData = {imgAlt, imgSrc}

  return (
    <header className={styles.header}>
      <div className={styles.header__logo_container}>
        <Logo />
      </div>
      
      <div className={styles.header__desc_wrapper}>
        <DescContainer { ...descData } />
      </div>

      <div className={styles.header__person_wrapper}>
        <PersonContainer { ...imgData } />
      </div>
    </header>
  )
}
