import { useState, useRef, useEffect } from 'react'

export function useScrollSpy(selectors: string[]) {
  console.log({ selectors })

  const [activeId, setActiveId] = useState<string | null>()
  const observer = useRef()
  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    )
    // observer?.current?.disconnect()
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          // console.log({
          //   //   target: entry.target,
          //   entry,
          // })
          if (
            entry.boundingClientRect.top < entry.intersectionRect.top &&
            entry.intersectionRatio > 0
          ) {
            if (entry.isIntersecting) {
              console.log('active from top', entry.target)
              setActiveId(entry.target.getAttribute('id'))
            } else {
              // console.log('inactive from top')
              // entries[idx + 1] &&
              //   setActiveId(entries[idx + 1].target.getAttribute('id'))
            }
            // console.log({ target: entry.target, entry }, 'top')
          } else if (
            entry.boundingClientRect.bottom > entry.intersectionRect.bottom &&
            entry.intersectionRatio > 0
          ) {
            if (entry.isIntersecting) {
              console.log('active from bottom', entry.target)
              setActiveId(entry.target.getAttribute('id'))
            } else {
              // console.log('inactive from bottom')
              // entries[idx - 1] &&
              //   setActiveId(entries[idx - 1].target.getAttribute('id'))
            }
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
