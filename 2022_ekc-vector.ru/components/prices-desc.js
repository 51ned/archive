import styles from '@/components/prices-desc.module.scss'

export default function PricesDesc(props) {
  return (
    <>
      <h3 className={styles.visually_hidden}>
        {props.title}
      </h3>
      <span className={styles.pseudo_title}>
        {props.pseudoTitle}
      </span>
      <p className={styles.desc}>
        {props.description}
      </p>
    </>
  )
}