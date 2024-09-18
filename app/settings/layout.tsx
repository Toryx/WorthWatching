import { SidebarDemo } from "@/components/ui/SideBarComponent"
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Settings - Worth Wathing",
  description: "Generated by create next app",
};
export default function SettingsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }