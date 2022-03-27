import GlobalNavComponent from "./GlobalNavComponent";

export default function SidebarComponent() {
  return (
    <nav className="h-full overflow-y-auto sticky border-r">
      <GlobalNavComponent className="mt-8 pb-8" />
    </nav>
  );
}
