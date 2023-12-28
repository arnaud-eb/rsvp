import HomeButton from "@/components/HomeButton";

export const dynamic = "force-dynamic";

export default function AuthLayout({
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
