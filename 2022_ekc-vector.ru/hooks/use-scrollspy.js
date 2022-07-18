import { useLayoutEffect } from 'react'


export default function useScrollspy() {
  useLayoutEffect(() => {
    const options = {
      threshold: .5
    }
    
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
    
          document.querySelector('.active').classList.remove('active')
          document.querySelector(`[href='#${id}']`).classList.add('active')
        }
      });
    }
    
    const spy = new IntersectionObserver(handleScroll, options)
    
    const targets = document.querySelectorAll('[data-spy-target]')
    
    targets.forEach((target) => {
      spy.observe(target);
    })
  }, [handleScroll])
}
