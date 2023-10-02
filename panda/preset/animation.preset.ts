/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { definePreset } from '@pandacss/dev'

export default definePreset({
  theme: {
    semanticTokens: {
      animations: {
        enter: { value: 'enter {durations.fast}' },
        exit: { value: 'exit' },
      },
    },
    extend: {
      keyframes: {
        enter: {
          from: {
            opacity: 'var(--enter-opacity, 1)',
            transform:
              'translate3d(var(--enter-translate-x, 0), var(--enter-translate-y, 0), 0) scale3d(var(--enter-scale, 1), var(--enter-scale, 1), var(--enter-scale, 1)) rotate(var(--enter-rotate, 0))',
          },
        },
        exit: {
          to: {
            opacity: 'var(--exit-opacity, 1)',
            transform:
              'translate3d(var(--exit-translate-x, 0), var(--exit-translate-y, 0), 0) scale3d(var(--exit-scale, 1), var(--exit-scale, 1), var(--exit-scale, 1)) rotate(var(--exit-rotate, 0))',
          },
        },
      },
    },
  },
  patterns: {
    extend: {
      animate: {
        description: 'Handles various enter/exit animations',
        properties: {
          animationName: { type: 'enum', value: ['enter', 'exit'] },
          opacity: { type: 'token', property: 'opacity', value: 'opacity' },
          scale: { type: 'number' },
          rotate: { type: 'number' },
          translateX: {
            type: 'token',
            property: 'translate',
            value: 'spacing',
          },
          translateY: {
            type: 'token',
            property: 'translate',
            value: 'spacing',
          },
          animationDuration: {
            type: 'token',
            property: 'animationDuration',
            value: 'durations',
          },
          direction: {
            type: 'property',
            value: 'animationDirection',
          },
        },
        transform(props: any) {
          const {
            animationName,
            opacity,
            scale,
            rotate,
            translateX,
            translateY,
            animationDuration,
            direction,
          } = props

          return {
            animationName,
            animationDuration: animationDuration || 'token(durations.faster)',
            animationDirection: direction || 'normal',
            [`--${animationName}-opacity`]: opacity || 'initial',
            [`--${animationName}-scale`]: scale || 'initial',
            [`--${animationName}-rotate`]: rotate || 'initial',
            [`--${animationName}-translate-x`]: translateX || 'initial',
            [`--${animationName}-translate-y`]: translateY || 'initial',
          }
        },
      },
    },
  },
})
