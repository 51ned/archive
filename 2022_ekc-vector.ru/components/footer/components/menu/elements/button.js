import styles from '@/components/footer/components/menu/elements/button.module.scss'


export default function Button({ controls, id, title, isActive, onClick }) {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <button
      aria-controls={controls}
      className={
        isActive
          ? `${styles.button}`
          : `${styles.button} ${styles.active}`
      }
      id={id}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
