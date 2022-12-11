import { Link } from '@remix-run/react'
import { useHydrated } from 'remix-utils'

export default function FourOhFour() {
  const isHydrated = useHydrated()
  if (process.env.NODE_ENV === 'production' && isHydrated) {
    window?.fathom?.trackGoal('8HR9GZLM', 0) // 404
  }

  return (
    <div className="flex">
      <div className="my-12 w-full px-4 md:px-8 xl:w-3/4">
        <div className="max-w-prose xl:mx-auto">
          <h1 className="mb-2 text-5xl font-medium leading-tight">404</h1>
          <p className="mb-8 text-lg text-gray-700">
            Looks like you found a page that doesn't exist.
          </p>
          <div className="prose">
            <Link prefetch="intent" to="/">
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
