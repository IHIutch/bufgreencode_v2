'use client'

import React, { type ReactNode } from 'react'

import { ChevronDown, ListOrdered } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ark-ui/react'
import { animate, square } from 'styled-system/patterns'

import { css, cx } from 'styled-system/css'

export default function MobileToc({ children }: { children: ReactNode }) {
  return (
    <div
      className={css({
        // position: 'sticky',
        // top: '2',
        // zIndex: '4',
        display: { base: 'block', xl: 'none' },
        mt: '8',
        mb: '12',
      })}
    >
      <Accordion
        collapsible={true}
        className={css({
          w: 'full',
          rounded: 'lg',
          borderWidth: '1px',
          borderColor: 'gray.200',
          bg: 'gray.50',
        })}
      >
        <AccordionItem value="one">
          <AccordionTrigger
            className={cx('group', css({
              display: 'flex',
              w: 'full',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              h: '10',
              px: '4',
              textAlign: 'left',
              rounded: 'lg',
              bg: {
                base: 'gray.50',
                _hover: 'gray.100',
              },
              transition: 'background-color ease 0.2s',
            }))}
          >
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
              })}
            >
              <ListOrdered className={square({ size: '6' })} />
              <div
                className={css({
                  ml: '2',
                })}
              >
                <span
                  className={css({
                    color: 'gray.700',
                    fontWeight: 'semibold',
                    fontSize: 'sm',
                  })}
                >
                  Page Contents
                </span>
              </div>
            </div>
            <div
              className={css({
                transition: 'transform ease 0.2s',
                transform: 'rotate(0)',
                _groupExpanded: {
                  transform: 'rotate(180deg)',
                },
              })}
            >
              <ChevronDown className={square({ size: '5' })} />
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={css({
              'display': 'grid',
              'px': '4',
              'gridTemplateRows': '0fr',
              'transition': 'ease 0.2s',
              'transitionProperty': 'grid-template-rows, padding-top, padding-bottom',
              'transform': 'rotate(0)',
              '&[data-state="open"]': {
                gridTemplateRows: '1fr',
                pt: '1',
                pb: '2',
              },
            })}
          >
            <div
              className={cx(
                css({
                  overflow: 'hidden',
                }),
                animate({
                  animationName: 'enter',
                  translateY: 'token(spacing.-2)',
                  opacity: '0.4',
                  animationDuration: 'token(durations.normal)',
                }))}
            >
              {children}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
