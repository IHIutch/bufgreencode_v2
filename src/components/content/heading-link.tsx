import { Portal, Tooltip } from '@ark-ui/react'

export function HeadingLink({ id }: { id: string }) {
  // const [isToolTipVisible, setIsToolTipVisible] = useState(false)
  const copyLinkToClipboard = () => {
    // setIsToolTipVisible(true)
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${window.location.origin}${window.location.pathname}#${id}`)
        .catch((error) => {
          console.error('Error copying text to clipboard:', error)
        })

      window?.fathom.trackEvent(`#${id}`)

      setTimeout(() => {
        // setIsToolTipVisible(false)
      }, 1000)
    }
    else {
      console.error('Clipboard API is not available in this browser')
    }
  }

  return (
    <div className="mt-[2em]">
      <Tooltip.Root openDelay={0} positioning={{ placement: 'top' }}>
        <Tooltip.Trigger
          className="flex items-center text-sm font-semibold text-green-700 hover:text-green-800 underline transition-colors ease-in-out duration-200 cursor-pointer"
          onClick={() => copyLinkToClipboard()}
        >
          <span className="icon-[lucide--link] size-3.5" />
          <div>
            <span className="ml-1">Share Section</span>
          </div>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content
              className="items-center rounded-md px-2 bg-gray-800 text-xs font-medium text-white z-10 relative leading-loose motion-safe:data-[state=open]:animate-enter motion-safe:data-[state=closed]:animate-exit [--enter-opacity:0] [--enter-translate-y:0.5rem] [--exit-opacity:0]"
            >
              Click to copy link
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </div>
  )
}
