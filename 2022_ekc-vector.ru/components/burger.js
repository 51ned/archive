import { useContext } from 'react'

import { ModalContext } from '@/components/modal/context'

import styles from '@/components/burger.module.scss'


export default function Burger() {
  let { openModal } = useContext(ModalContext)

  return (
    <button
      aria-label='Открыть окно'
      className={styles.burger}
      onClick={() => openModal('nav')}
      title='Главное меню'
    >
      <svg className={styles.burger__icon} xmlns='http://www.w3.org/2000/svg' width='24px' height='20px' viewBox='0 0 24 20'>
        <rect width='24' height='4'/>
        <rect x='8' y='16' width='16' height='4'/>
        <rect x='4' y='8' width='20' height='4'/>
      </svg>
    </button>
  )
}
