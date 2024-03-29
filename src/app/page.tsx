import { prose } from 'styled-system/recipes'

import { css } from 'styled-system/css'

export default function Home() {
  return (
    <div
      className={css({
        my: '12',
        w: { base: 'full', xl: 'calc(100% - token(sizes.80))' },
        px: { base: '4', md: '8' },
      })}
    // className="my-12 w-full px-4 md:px-8 xl:w-[calc(100%-20rem)]"
    >
      <div
        className={css({ maxW: 'prose', mx: { base: 'auto', md: '0', xl: 'auto' } })}
      // className="max-w-prose xl:mx-auto"
      >
        <h1
          className={css({
            mb: '6',
            fontSize: '5xl',
            fontWeight: 'medium',
            letterSpacing: 'tight',
          })}
        // className="mb-6 text-5xl font-medium leading-tight"
        >
          Welcome
        </h1>
        <div
          className={prose()}
        // className="prose"
        >
          <p
            className={css({
              fontSize: 'xl',
              lineHeight: 'relaxed',
              color: 'gray.600',
            })}
          // className="lead"
          >
            The Buffalo Green Code Unified Development Ordinance Becomes
            Effective Citywide.
          </p>
          <p>
            With the Unified Development Ordinance now effective citywide, April
            3, 2017 marks the culmination of a nearly seven-year effort that
            involved thousands of community members in neighborhoods throughout
            our city. Since Mayor Byron W. Brown initially announced the Buffalo
            Green Code, on Earth Day of 2010, the effort has been a
            community-driven process aimed at ensuring the Green Code reflects
            the values of our residents. Thank you to all of you who have
            dedicated so much of your time and passion during this historic
            initiative!
          </p>
        </div>
      </div>
    </div>
  )
}
