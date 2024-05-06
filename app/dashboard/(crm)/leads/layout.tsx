import Breadcrumb from "../../_components/Breadcrumb"


export default function Layout({ children }: {
  children: React.ReactNode

}) {
  return (
    <div className="relative">
      <div className="fixed top-0 z-[50] h-14 flex items-center">
        <Breadcrumb />
      </div>

      <div className=" pt-14">{children}</div>
    </div>
  )
}