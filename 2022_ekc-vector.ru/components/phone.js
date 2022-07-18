import styles from '@/components/phone.module.scss'


export default function Phone(phoneData) {
  return (
    <a className={styles.phone} href={`tel:${phoneData.link}`}>
      <span className={styles.phone__code}>
        {phoneData.code}
      </span>
      <span className={styles.phone__number}>
        {phoneData.number}
      </span>
    </a>
  )
}
