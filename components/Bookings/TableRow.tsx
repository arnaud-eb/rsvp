import { prisma } from "@/lib/db";

const getBooking = async (userId: string) => {
  const booking = await prisma.booking.findUnique({
    where: {
      userId,
    },
  });
  return booking;
};

const getGuests = async (userId: string) => {
  const guests = await prisma.guest.findMany({
    where: {
      userId,
    },
  });
  return guests;
};

const TableRow = async ({
  user,
}: {
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
  };
}) => {
  const booking = await getBooking(user.id);
  const [firstGuest, secondGuest] = await getGuests(user.id);
  return (
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <th scope="row" className="whitespace-nowrap px-6 py-4 text-white">
        {firstGuest && (
          <>
            <div className="text-base font-semibold">
              {firstGuest.firstName} {firstGuest.lastName}
            </div>
            <div className="font-normal text-gray-500">{user.email}</div>
            {firstGuest.dietaryRestrictions && (
              <div className="font-normal text-gray-500">
                {firstGuest.dietaryRestrictions}
              </div>
            )}
          </>
        )}
      </th>
      <td className="whitespace-nowrap px-6 py-4 text-white">
        {secondGuest && (
          <>
            <div className="text-base font-semibold">
              {secondGuest.firstName} {secondGuest.lastName}
            </div>
            {secondGuest.dietaryRestrictions && (
              <div className="font-normal text-gray-500">
                {secondGuest.dietaryRestrictions}
              </div>
            )}
          </>
        )}
      </td>
      <td className="px-6 py-4">{booking?.accommodation || ""}</td>
      <td className="px-6 py-4">
        {booking?.activities.includes("cocktail") ? (
          <svg
            className="h-3 w-3 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        ) : (
          <svg
            className="h-3 w-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        )}
      </td>
      <td className="px-6 py-4">
        {booking?.activities.includes("dinner") ? (
          <svg
            className="h-3 w-3 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        ) : (
          <svg
            className="h-3 w-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        )}
      </td>
      <td className="px-6 py-4">
        {booking?.activities.includes("brunch") ? (
          <svg
            className="h-3 w-3 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        ) : (
          <svg
            className="h-3 w-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        )}
      </td>
      <td className="px-6 py-4">{booking?.message || ""}</td>
    </tr>
  );
};

export default TableRow;
