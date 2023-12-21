import HomeButton from "@/components/HomeButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav>
          <HomeButton />
        </nav>
      </header>
      {children}
    </>
  );
}
