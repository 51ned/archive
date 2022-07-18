import styles from '@/components/service/elements/button.module.scss'


export default function Button({ controls, isActive, id, isTabs, onClick, title }) {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <button
      aria-expanded={isActive ? 'true' : 'false'}
      aria-controls={controls}
      aria-selected={isActive ? 'true' : 'false'}
      className={
        isActive
          ? `${styles.button} ${styles.active}`
          : `${styles.button}`
      }
      id={id}
      onClick={handleClick}
      role={isTabs ? 'tab' : 'button'}
      tabIndex={isActive ? '-1' : '0'}
    >
      {title}
    </button>
  )
}
