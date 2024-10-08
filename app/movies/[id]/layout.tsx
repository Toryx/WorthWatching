export default function MovieLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex h-auto mx-auto">
      <div className="absolute top-0 left-0 [background:radial-gradient(125%_125%_at_50%_10%,#0C061C_40%,#180c39_100%)]">
        {children}
      </div>
    </section>
  )
}