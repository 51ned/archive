import styles from '@/components/service/elements/content.module.scss'


export default function Content({ id, isActive, isTabs, labeled, text }) {
  return (
    <div
      aria-labelledby={labeled}
      className={ 
        isActive
          ? `${styles.content}`
          : `${styles.content} ${styles.visually_hidden}`
      }
      id={id}
      role={isTabs ? 'tabpanel' : 'region'}
      tabIndex={isActive ? '0' : '-1'}
    >
      {text.map((paragraph, index) => (
        <p className={styles.paragraph} key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}
