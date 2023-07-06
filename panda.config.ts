import { customProseRecipe } from 'panda/recipes/custom-prose.recipe'
import { proseRecipe } from 'panda/recipes/prose.recipe'
import { type AnimationToken } from 'styled-system/tokens'

import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
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
      recipes: {
        prose: proseRecipe,
        customProse: customProseRecipe,
      },
      tokens: {
        lineHeights: {
          '3': { value: '0.75rem' },
          '4': { value: '1rem' },
          '5': { value: '1.25rem' },
          '6': { value: '1.5rem' },
          '7': { value: '1.75rem' },
          '8': { value: '2rem' },
          '9': { value: '2.25rem' },
          '10': { value: '2.5rem' },
        },
        animations: {
          enter: {
            scale: {
              DEFAULT: { value: '0' },
              '50': { value: '0.5' },
              '90': { value: '0.9' },
              '95': { value: '0.95' },
              '100': { value: '1' },
              '125': { value: '1.25' },
              '150': { value: '1.5' },
            },
          },
          exit: {
            scale: {
              DEFAULT: { value: '0' },
              '50': { value: '0.5' },
              '90': { value: '0.9' },
              '95': { value: '0.95' },
              '100': { value: '1' },
              '125': { value: '1.25' },
              '150': { value: '1.5' },
            },
          },
        },
      },
    },
  },
  utilities: {
    extend: {
      animate: {
        // slide: {
        //   top: {
        values: 'animations',
        transform(value: AnimationToken, { raw }: { raw: any }) {
          const [direction, style] = raw.split('.')
          return { [`--${direction}-${style}`]: value }
        },
      },
      // right: {
      //   DEFAULT: { value: '--enter-translate-y: 100%' },
      // },
      // bottom: {
      //   DEFAULT: { value: '--enter-translate-x: 100%' },
      // },
      // left: {
      //   DEFAULT: { value: '--enter-translate-y: -100%' },
      // },
      // },
      // exit: {
      //   slide: {
      //     top: {
      //       DEFAULT: { value: '--exit-translate-x: -100%' },
      //     },
      //     right: {
      //       DEFAULT: { value: '--exit-translate-y: 100%' },
      //     },
      //     bottom: {
      //       DEFAULT: { value: '--exit-translate-x: 100%' },
      //     },
      //     left: {
      //       DEFAULT: { value: '--exit-translate-y: -100%' },
      //     },
      //   },
    },
  },

  patterns: {
    extend: {
      animate: {
        description: 'Handles animations',
        properties: {
          // The direction of the animation
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
        transform(props) {
          const {
            direction,
            opacity,
            scale,
            rotate,
            translateX,
            translateY,
            duration,
            ...rest
          } = props

          return {
            animationName: direction,
            animationDuration: duration || 'token(durations.faster)',
            [`--${direction}-opacity`]: opacity || 'initial',
            [`--${direction}-scale`]: scale || 'initial',
            [`--${direction}-rotate`]: rotate || 'initial',
            [`--${direction}-translate-x`]: translateX || 'initial',
            [`--${direction}-translate-y`]: translateY || 'initial',
            ...rest,
          }
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  strictTokens: true,
})
