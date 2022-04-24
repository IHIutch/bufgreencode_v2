import GlobalNavComponent from './GlobalNavComponent'

export default function SidebarComponent() {
  return (
    <nav className="h-full overflow-y-auto sticky border-r">
      <div className="py-8">
        <GlobalNavComponent />
      </div>
    </nav>
  )
}
