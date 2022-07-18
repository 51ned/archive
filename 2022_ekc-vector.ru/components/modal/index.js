import { useContext } from 'react'

import { ModalContext } from '@/components/modal/context'

import styles from '@/components/modal/index.module.scss'


export default function Modal({ children, isOpened, title }) {
  let { closeModal } = useContext(ModalContext)

  return (
    <div className={styles.modal}>
      <div
        aria-hidden={!isOpened ? 'true' : 'false'}
        className={
          isOpened
          ? `${styles.modal__overlay}`
          : `${styles.visually_hidden}`
        }
        onClick={() => closeModal()}
      >
        <div className={styles.modal__wrapper}>
          <div 
            aria-modal
            className={styles.modal__window}
            onClick={evt => evt.stopPropagation()}
            role='dialog'
            tabIndex={isOpened ? '0' : '-1'}
          >
            <div className={styles.modal__body}>
              <div className={styles.modal__header}>
                <p className={styles.modal__title}>
                  {title}
                </p>
                
                <button
                  className={styles.modal__button}
                  onClick={() => closeModal()}
                >
                  <span className={styles.modal__button_icon} />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
