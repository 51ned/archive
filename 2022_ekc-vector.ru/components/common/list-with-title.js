import styles from '@/components/common/list-with-title.module.scss'


export default function ListWithTitle({ title, list }) {

  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li className={styles.list__item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
