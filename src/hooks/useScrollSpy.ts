import { useState, useRef, useEffect } from 'react'

export function useScrollSpy(selectors: Selector[]) {
  const [activeId, setActiveId] = useState<string | null>()
  const observer = useRef(null)
  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    )
    observer.current?.disconnect()
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry?.isIntersecting) {
            setActiveId(entry.target.getAttribute('id'))
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-64px 0px -50% 0px',
      }
    )
    elements.forEach((el) => {
      if (el) observer.current?.observe(el)
    })
    return () => observer.current?.disconnect()
  }, [selectors])

  return activeId
}
