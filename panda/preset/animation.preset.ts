import { definePreset } from '@pandacss/dev'

export default definePreset({
  theme: {
    semanticTokens: {
      animations: {
        enter: { value: `enter {durations.fast}` },
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
          direction: { type: 'enum', value: ['enter', 'exit'] },
          opacity: { type: 'token', property: 'opacity', value: 'opacity' },
          scale: { type: 'token', property: 'scale' },
          rotate: { type: 'token', property: 'rotate' },
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
          duration: {
            type: 'token',
            property: 'animationDuration',
            value: 'durations',
          },
        },
        transform(props: any) {
          const {
            direction,
            opacity,
            scale,
            rotate,
            translateX,
            translateY,
            duration,
          } = props

          return {
            animationName: direction,
            animationDuration: duration || 'token(durations.faster)',
            [`--${direction}-opacity`]: opacity || 'initial',
            [`--${direction}-scale`]: scale || 'initial',
            [`--${direction}-rotate`]: rotate || 'initial',
            [`--${direction}-translate-x`]: translateX || 'initial',
            [`--${direction}-translate-y`]: translateY || 'initial',
          }
        },
      },
    },
  },
})
