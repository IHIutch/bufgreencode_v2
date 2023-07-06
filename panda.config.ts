import animationPreset from 'panda/preset/animation.preset'
import { customProseRecipe } from 'panda/recipes/custom-prose.recipe'
import { proseRecipe } from 'panda/recipes/prose.recipe'

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
    extend: {
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
      },
    },
  },

  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', animationPreset],
  // The output directory for your css system
  outdir: 'styled-system',
  strictTokens: true,
})
