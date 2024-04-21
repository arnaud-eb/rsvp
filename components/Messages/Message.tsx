import { Prisma } from "@prisma/client";
import React, { FC } from "react";

type Message = Prisma.MessageGetPayload<{
  select: Prisma.MessageSelect;
}>;

interface MessageProps {
  message: Message;
}

const Message: FC<MessageProps> = ({ message }) => {
  const { firstName, lastName, message: text, createdAt } = message;
  return (
    <article className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900">{firstName}</span>
        {lastName && (
          <span className="text-sm font-semibold text-gray-900">
            {lastName}
          </span>
        )}
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {createdAt.toLocaleString()}
        </span>
      </div>
      <p className="py-2.5 text-sm font-normal text-gray-900">{text}</p>
    </article>
  );
};

export { Message };
