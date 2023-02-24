import { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { LinkIcon } from 'lucide-react'

export const HeadingLink = ({ id }: { id: string }) => {
  const [isToolTipVisible, setIsToolTipVisible] = useState(false)
  const copyLinkToClipboard = () => {
    setIsToolTipVisible(true)
    navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}#${id}`
    )

    // if (process.env.NODE_ENV === 'production') {
    //   window.fathom.trackGoal('RC2RYOND', 0)
    // }
    setTimeout(() => {
      setIsToolTipVisible(false)
    }, 800)
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={isToolTipVisible}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            className="mb-1 flex items-center text-sm font-semibold text-green-600 underline transition-colors hover:text-green-700"
            onClick={copyLinkToClipboard}
          >
            <LinkIcon strokeWidth="3" className="h-[0.875rem] w-[0.875rem]" />
            <div>
              <span className="ml-1">Share Section</span>
            </div>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="rdx-tooltip inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs text-white">
          Copied to clipboard
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
