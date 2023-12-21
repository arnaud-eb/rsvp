import Link from "next/link";

const AdminPage = () => (
  <main className="m-auto min-w-[350px] max-w-[1200px]">
    <Link href={"/admin/messages"}>Messages</Link>
    <Link href={"/admin/bookings"}>Bookings</Link>
  </main>
);

export default AdminPage;
