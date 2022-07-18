import styles from '@/components/activity-header/elements/copyright.module.scss'


export default function Copyright() {
  return (
    <p className={styles.copyright}>
      © {(new Date()).getFullYear()} ООО «ЭКЦ «Вектор»
    </p>
  )
}