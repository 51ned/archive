import styles from '@/components/prices/elements/button.module.scss'


export default function Button({ controls, isActive, id, onClick, text }) {
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
      role='tab'
      tabIndex={isActive ? '-1' : '0'}
      type='button'
    >
      {text}
    </button>
  )
}
