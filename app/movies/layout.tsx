import { SidebarDemo } from "@/components/ui/SideBarComponent"

export default function ProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
       <section className="min-h-screen mx-auto">
        {children}
      </section>
    )
  }