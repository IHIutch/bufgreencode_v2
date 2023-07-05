'use client'

import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

import { css } from 'styled-system/css'

export default function SubnavComponent({
  children,
  section,
}: {
  children: ReactNode
  section?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [section])

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial')
  }, [isOpen])

  return (
    <div
      className={css({
        position: 'fixed',
        insetX: '0',
        top: '0',
        pt: { base: '14', lg: '16' },
        display: {
          md: 'none',
        },
      })}
      // className="fixed inset-x-0 top-0 pt-16 md:hidden"
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          bg: 'gray.100',
        })}
        // className="flex flex-col bg-gray-100"
      ></div>
    </div>
  )
}
