import { useState, useEffect } from 'react'

import useWindowSize from '@/hooks/use-window-size'


export default function useModal() {
  const [isSelected, setSelected] = useState()

  const { width } = useWindowSize()

  let isDesktop = true

  if (width <= 1280) {
    isDesktop = false
  }
  
  const openModal = (props) => {
    isDesktop
      ? document.body.classList.add('blocked_on_desktop')
      : document.body.classList.add('blocked_on_mobile')

    setSelected(props)
  }

  const closeModal = () => {
    document.body.removeAttribute('class')
    setSelected()
  }

  const closeModalwithEsc = (evt) => {
    if (evt.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeModalwithEsc)

    return () => {
      document.body.removeEventListener('keydown', closeModalwithEsc)
    }
  }, [])

  return {
    isSelected,
    openModal,
    closeModal
  }
}
