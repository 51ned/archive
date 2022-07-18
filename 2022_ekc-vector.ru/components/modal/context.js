import React from 'react'

import useModal from '@/hooks/use-modal'


let ModalContext

const { Provider } = (ModalContext = React.createContext())

const ModalProvider = ({ children }) => {
  const { isSelected, openModal, closeModal } = useModal()

  return (
    <Provider value={{ isSelected, openModal, closeModal }}>
      {children}
    </Provider>
  )
}

export { ModalContext, ModalProvider }
