import { prisma } from "@/lib/db";

import TableHeader from "@/components/Bookings/TableHeader";
import TableRow from "@/components/Bookings/TableRow";

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const BookingsPage = async () => {
  const users = await getUsers();
  return (
    <main>
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
        <TableHeader />
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default BookingsPage;
