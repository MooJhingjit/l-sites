import Breadcrumb from "../../components/Breadcrumb"


export default function Layout({ children }: {
  children: React.ReactNode

}) {
  return (
    <div className="relative">
      <div className="fixed top-0 z-[50] h-14 flex items-center">
        <Breadcrumb />
      </div>

      {children}
    </div>
  )
}